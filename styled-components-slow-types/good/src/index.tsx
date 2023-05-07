import { createRoot } from "react-dom/client";
import { ComponentPropsWithoutRef, StrictMode, MouseEvent } from "react";

import { Button, ButtonProps } from "./Button";
import { css } from "styled-components/macro";

function BigButton(props: ButtonProps) {
  return (
    <Button
      css={`
        font-size: 2rem;
        padding: 1.5rem;
        border-radius: 1rem;
      `}
      {...props}
    />
  );
}

const BigButtonAnchor = (props: ButtonProps.LinkProps) => {
  return (
    <BigButton
      css={`
        text-decoration: none;
        display: inline-block;
        border: 2px solid black;
        :hover {
          background-color: lavender;
        }
        :after {
          content: " →";
        }
      `}
      {...props}
    />
  );
};

const Example = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <div>
      <Button size="md" variant="primary">
        Boom
      </Button>
    </div>
    <div>
      <Button size="sm" variant="secondary">
        Boom
      </Button>
    </div>
    <div>
      <BigButton href="/" target="_blank">
        Boom
      </BigButton>
    </div>
    <div>
      <BigButtonAnchor
        href="/"
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
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
