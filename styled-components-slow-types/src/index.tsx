import styled, { css } from "styled-components";
import { createRoot } from "react-dom/client";
import { ComponentPropsWithoutRef, ElementType, memo, StrictMode } from "react";

interface ButtonStyleProps {
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
}

const Button = memo(
  styled(
    <As extends ElementType<{}>>(
      props: { tag: As } & ComponentPropsWithoutRef<As>
    ) => {
      const { tag: Tag, ...rest } = props;
      return <Tag {...(rest as JSX.LibraryManagedAttributes<As, any>)} />;
    }
  ).attrs(() => ({
    type: "button",
  }))`
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font: inherit;
    font-weight: 700;

    padding: ${({ size }: ButtonStyleProps) =>
      size === "sm" ? "0.5rem" : "1rem"};

    font-size: ${({ size }) => (size === "sm" ? "0.75rem" : "1rem")};

    ${({ variant = "secondary" }) => {
      switch (variant) {
        case "primary":
          return css`
            background-color: blue;
            color: white;
            border: 1px solid transparent;
            border-radius: 0.5rem;

            :hover {
              background-color: darkblue;
            }
          `;
        case "secondary":
          return css`
            background-color: white;
            color: black;
            border: 1px solid black;
            border-radius: 0.25rem;

            :hover {
              background-color: lightgray;
            }
          `;
      }
    }}
  `
);

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
      <Button tag size="sm" variant="secondary">
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
