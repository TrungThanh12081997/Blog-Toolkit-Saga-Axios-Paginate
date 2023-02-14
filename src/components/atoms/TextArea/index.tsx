import React, { forwardRef } from "react";
// import Paragraph from "components/atoms/Paragraph";
import { mapModifiers } from "utils/functions";

import Text from "../Text";

// import Text from "../Text";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label?: string;
  rows?: number;
  error?: string;
}

const TextAreaRef: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    id,
    label,
    rows = 4,
    error,
    ...props
  },
  ref,
  ) => (
    <div className={mapModifiers("a-textarea", error && "error")}>
      {/* {label && (
        <div className="a-textarea_label">
          <label htmlFor={id}>
            <Text              modifiers={['']}
            >
              {label}
            </Text>
          </label>
        </div>
      )} */}
      <textarea
        {...props}
        className="a-textarea_inputele"
        ref={ref}
        rows={rows}
        id={id}
      />
      {error && (
        <span className={mapModifiers("a-textarea_errorMessage")}>
          <Text   modifiers={["electricCrimson", "14x16"]}  >
            {error}
          </Text>
        </span>
      )}
    </div>
  );

const TextArea = forwardRef(TextAreaRef);

export default TextArea;
