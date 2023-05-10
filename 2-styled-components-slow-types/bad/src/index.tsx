import { createRoot } from "react-dom/client";
import { ComponentPropsWithoutRef, StrictMode, memo } from "react";
import styled from "styled-components";

import { Button } from "./Button";

const BigButton = styled(Button)`
  font-size: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const BigButtonAnchor = memo(styled(BigButton.withComponent("a"))`
  text-decoration: none;
  display: inline-block;
  border: 2px solid black;
  :hover {
    background-color: lavender;
  }
  :after {
    content: " →";
  }
`);

const Example = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <div>
      <Button tag="div" size="md" variant="primary">
        Boom
      </Button>
    </div>
    <div>
      <Button tag="button" size="sm" variant="secondary">
        Boom
      </Button>
    </div>
    <div>
      <BigButton as="a" href="/" target="_blank">
        Boom
      </BigButton>
    </div>
    <div>
      <BigButtonAnchor
        href="/"
        as={(props: ComponentPropsWithoutRef<"a">) => <a {...props} />}
        onClick={(e: Event) => {
          console.log(e);
        }}
      >
        Go somewhere
      </BigButtonAnchor>
    </div>
  </div>
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Example />
  </StrictMode>
);
