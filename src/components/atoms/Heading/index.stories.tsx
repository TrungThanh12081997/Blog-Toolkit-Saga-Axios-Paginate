import { Story, Meta } from "@storybook/react";
import React from "react";

import Heading from ".";

export default {
  title: "Components/atoms/Heading",
  component: Heading,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["white", "black", "deepKoamaru", "midNightGreen", "khaki"],
      },
      defaultValue: "black",
    },
    textStyle: {
      control: {
        type: "select",
        options: ["uppercase", "lowercase", "capitalize", "underline", "center"],
      },
      defaultValue: "lowercase",
    },
    fontWeight: {
      control: {
        type: "select",
        options: ["100", "200", "300", "400", "500", "600", "700"],
      },
      defaultValue: "400",
    },
    size: {
      control: {
        type: "select",
        options: ["87x88", "48x60", "80x88"],
      },
      defaultValue: "87x88",
    },
    content: {
      control: {
        type: "text",
      },
      defaultValue: "this is<br/>content",
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "shadow", "filter", "linear"],
      },
      defaultValue: "default",
    },
  },
} as Meta;

export const normal: Story = ({
  color, textStyle, fontWeight, size, content, variant,
}) => (
  <Heading modifiers={[color, textStyle, fontWeight, size, variant]} content={content} />
);
