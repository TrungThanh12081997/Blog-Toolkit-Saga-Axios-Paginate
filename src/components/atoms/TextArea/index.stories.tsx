import { Story, Meta } from "@storybook/react";
import React from "react";

import TextArea from ".";

export default {
  title: "Components/atoms/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Nội dung",
    },
    rows: {
      control: "select",
      options: ["2", "3", "4", "5", "6"],
    },
    error: {
      control: "text",
    },
    placeholder: {
      control: "text",
      defaultValue: "Nội dung",
    },
    disabled: {
      control: "boolean",
      options: [true, false],
      defaultValue: false,
    },
  },
} as Meta;

export const Normal: Story = ({
  label, rows, error, placeholder, disabled, required,
}) => (
  <TextArea
    id="text-area"
    label={label}
    rows={rows}
    error={error}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
  />
);
