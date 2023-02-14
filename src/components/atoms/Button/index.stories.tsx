import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  title: "Components/atoms/Button",
  component: Button,
  argTypes: {
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    background: {
      control: {
        type: "select",
        options: ["primary", "dark", "white"],
      },
      defaultValue: "primary",
    },
    outline: {
      control: {
        type: "select",
        options: ["", "outline-primary", "outline-dark"],
      },
      defaultValue: "",
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
      defaultValue: "lg",
    },
    radius: {
      control: {
        type: "select",
        options: ["", "xs", "sm", "md"],
      },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<any> = ({
  radius,
  background,
  outline,
  loading,
  disabled,
  size,
}) => (
  <div style={{ padding: 20 }}>
    <Button
      loading={loading}
      radius={radius}
      disabled={disabled}
      modifiers={[background, outline, size]}
    >
      <span>Xem tất cả</span>
    </Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
