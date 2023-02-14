import { Story, Meta } from "@storybook/react";
import React, { useState } from "react";

import Input from ".";

export default {
  title: "Components/atoms/Input",
  component: Input,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    type: {
      control: {
        type: "select",
        options: ["text", "number", "email"],
      },
      defaultValue: false,
    },
    iconLeft: {
      control: {
        type: "select",
        options: ["email", "phone"],
      },
      defaultValue: "default",
    },
    disabled: {
      control: {
        type: "boolean",
        options: [false, true],
      },
      defaultValue: false,
    },
    placeholder: {
      control: {
        type: "text",
      },
      defaultValue: "Họ",
    },
    error: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "pk3"],
      },
      defaultValue: "default",
    },
  },
} as Meta;

export const Normal: Story = ({
  label,
  disabled,
  placeholder,
  error,
  type,
}) => {
  const [value, setValue] = useState("");
  return (
    <div style={{ padding: "50px", maxWidth: "700px" }}>
      <Input
        name="test"
        autoComplete="off"
        label={label}
        id="input"
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

