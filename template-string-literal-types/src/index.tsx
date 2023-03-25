// ref: https://github.com/microsoft/TypeScript/issues/52867

const Database = () => ({
  query: (_query: string) => {
    return {
      get: (_params: any) => {
        return {
          last_processed: "2019-01-01",
          last_known_update: "2019-01-01",
        };
      },
    };
  },
});

type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type zeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type YYYY =
  | `19${zeroToNine}${zeroToNine}`
  | `20${zeroToNine}${zeroToNine}`;
type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
type DD = `${0}${oneToNine}` | `${1 | 2}${zeroToNine}` | `3${0 | 1}`;
export type FullDateString = `${YYYY}-${MM}-${DD}`;

export const ensureSubmissionsAreUptodate = async (cik: number) => {
  const db = Database();
  const processedDatesQuery = db.query(
    `SELECT last_processed, last_known_update FROM edgar_submissions WHERE cik=$cik`
  );
  let last_processed: FullDateString | null = null;
  let last_known_update: FullDateString | null = null;
  const result = processedDatesQuery.get({ $cik: cik });

  if (result) {
    last_processed = result.last_processed as FullDateString; // this is the problem
    last_known_update = result.last_known_update as FullDateString; // and this
    if (last_processed == null) {
      return { last_processed, last_known_update };
    }
    if (
      last_processed &&
      last_known_update &&
      last_processed >= last_known_update
    ) {
      return { last_processed, last_known_update };
    }
  }

  return {
    last_processed: null,
    last_known_update:
      last_known_update || new Date().toISOString().slice(0, 10),
  };
};
