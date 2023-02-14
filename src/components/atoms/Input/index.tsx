import React, { forwardRef } from "react";
import Text from "components/atoms/Text";
import { mapModifiers } from "utils/functions";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

  modifiers?: GeneralTextStyle[];
  id?: string;
  label?: string;
  error?: string;
 
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type, id, label, error, modifiers, ...props
  },
  ref,
) => 
  // const { isMobile, isTablet } = useDeviceQueries();
   (
    <div className={mapModifiers("a-input", modifiers, error && "error")}>
      {label && (
        <div className="a-input_label">
          <label htmlFor={id}>
            <Text modifiers={["16x24", `${error ? "electricCrimson" : "black"}`]}>{label}</Text>
          </label>
        </div>
      )}
      <div className={`a-input_wrap ${props.disabled ? "disabled" : ""}`}>
        <input
          id={id}
          className={`a-input_input  `}
          type={type}
          ref={ref}
          placeholder={props.placeholder}
          {...props}
        />

      </div>
      {error && (
        <div className="a-input_messageError">
          <Text modifiers={["16x24", "electricCrimson"]}>{error}</Text>
        </div>
      )}
    </div>
  )
;

const Input = forwardRef(InputRef);

Input.defaultProps = {
  type: "text",
  error: undefined,
  modifiers: undefined,
  label: undefined,
};

export default Input;
