/* eslint-disable react/button-has-type */
import React from "react";
import { mapModifiers } from "utils/functions";
import loadingIcon from "assets/images/loading.gif";

type Sizes = "xs" | "sm" | "md" | "lg";
type Variant = "primary" | "dark" | "white" | "blue";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?: (Variant | Sizes)[];
  radius?: Sizes;
  link?: {
    href?: string;
    target?: string;
  };
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  modifiers,
  radius,
  loading,
  children,
  link,
  type,
  ...props
}) => (
  <button
    type={type || "button"}
    className={mapModifiers("a-button", modifiers, radius && `r${radius}`, loading && "loading")}
    {...props}
  >
    <div className='a-button_wrapper'>
      {loading ? (
        <img className='a-button_loadingIcon' src={loadingIcon} alt='loading' />
      ) : (
        children
      )}
    </div>
  </button>
);

export default Button;
