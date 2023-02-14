import React from "react";
import { mapModifiers } from "utils/functions";
// import  mapModifiers from "utils/functions";


interface ContainerProps {
  variant?: "default" | "pk3"
  modifiers?: ("fullscreen" | "noPaddingRight" | "noPaddingLeft")[];
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ modifiers,  variant, children }) => (
  <div className={`container ${mapModifiers("o-container", variant, modifiers)}`}>
    {children}
  </div>
);

Container.defaultProps = {
  modifiers: undefined,
  children: undefined,
variant:"default",
};

export default Container;
