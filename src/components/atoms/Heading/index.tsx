import React from "react";
import { mapModifiers } from "utils/functions";

export type Sizes =
  | "87x88"
  | "48x60"
  | "80x88"
  | "20x25"
  | "92x88"
  | "60x68"
  | "28x35"
  | "16x20";
 

type Variant = "shadow" | "linear" | "shadowPlatinum";
export type ModifiersHeading = (GeneralTextStyle | Sizes | Variant)[];
interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  content?: string;
  modifiers?: ModifiersHeading;
}

const Heading: React.FC<HeadingProps> = ({
  type = "h5",
  content,
  modifiers,
  children,
}) => {
  const Element = type;
  return (
    content ? (
      <Element
        className={mapModifiers("a-heading", modifiers)}
      />
    ) : (
      <Element
        className={mapModifiers("a-heading", modifiers)}
      >
        {children}
      </Element>
    )
  );
};

Heading.defaultProps = {
  children: undefined,
};

export default Heading;
