import styled, { css } from "styled-components";
import { memo } from "react";

import { Box } from "./Box";

export interface ButtonStyleProps {
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
}

export const Button = memo(
  styled(Box).attrs(() => ({ type: "button" }))`
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
