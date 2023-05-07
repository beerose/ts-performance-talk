import { ComponentPropsWithoutRef, ElementType } from "react";

type BoxProps<As extends ElementType<{}>> = BoxOwnProps & {
  tag: As;
} & ComponentPropsWithoutRef<As>;

// Don't do this at home, this is just an example.
export const Box = <As extends ElementType<{}>>(props: BoxProps<As>) => {
  const { tag: Tag, p, ...rest } = props;

  // Simplified for the sake of example, but people have code like that.
  return (
    <Tag
      {...(rest as JSX.LibraryManagedAttributes<As, any>)}
      style={{
        ...("style" in rest && typeof rest.style === "object" && rest.style),
        padding: p,
      }}
    />
  );
};

type BoxOwnProps = {
  /**
   * Shorthand for padding.
   */
  p?: string | number;
};
