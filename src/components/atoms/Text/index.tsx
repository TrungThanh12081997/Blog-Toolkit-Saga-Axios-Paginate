import React from "react";
import { mapModifiers } from "utils/functions";

type Size = "12x18" | "14x22" | "14x20" | "16x24" | "20x25" | "8x8"  | "14x16";

export type TypeModifiers = (Size | FontFamily | ColorStyle | FontWeightStyle | TextStyle)[];
interface TextProps {
  children?: React.ReactNode;
  content?: string;
  type?: "p" | "span" | "div";
  modifiers?: TypeModifiers;
}

const Text: React.FC<TextProps> = ({
  children,
  content,
  type = "p",
  modifiers,
}) => {
  const Element = type;
  return content ? (
    <div
      className={mapModifiers("a-text", modifiers)}

    />
  ) : (
    <Element className={mapModifiers("a-text", modifiers)}>{children}</Element>
  );
};

Text.defaultProps = {
  children: undefined,
};

export default Text;
