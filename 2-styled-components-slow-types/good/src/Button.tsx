import * as React from "react";
import { memo } from "react";
import styled, { CSSProp, css } from "styled-components/macro";

import { Box, BoxOwnProps } from "./Box";

export interface ButtonOwnProps extends BoxOwnProps {
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
}

export declare namespace ButtonProps {
  interface LinkProps
    extends ButtonOwnProps,
      React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
  }

  interface ButtonProps
    extends ButtonOwnProps,
      React.ButtonHTMLAttributes<HTMLButtonElement> {}
}

export type ButtonProps = ButtonProps.LinkProps | ButtonProps.ButtonProps;

export function Button(props: ButtonProps) {
  const { size, variant, ...rest } = props;

  const styles: CSSProp = css`
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font: inherit;
    font-weight: 700;

    ${size === "sm"
      ? css`
          font-size: 0.5rem;
          padding: 0.75rem;
        `
      : css`
          font-size: 1rem;
          padding: 1rem;
        `}

    ${variant === "primary"
      ? css`
          background-color: blue;
          color: white;
          border: 1px solid transparent;
          border-radius: 0.5rem;

          :hover {
            background-color: darkblue;
          }
        `
      : css`
          background-color: white;
          color: black;
          border: 1px solid black;
          border-radius: 0.25rem;

          :hover {
            background-color: lightgray;
          }
        `}
  `;

  if ("href" in rest) {
    return <Box tag="a" css={styles} {...rest} />;
  }

  return <Box tag="button" css={styles} {...rest} />;
}
