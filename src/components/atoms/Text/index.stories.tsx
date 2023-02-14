import { Story, Meta } from "@storybook/react";
import React from "react";

import Text from ".";

export default {
  title: "Components/atoms/Text",
  component: Text,
  argTypes: {
    sizes: {
      control: {
        type: "select",
        options: [
          "12x18",
          "16x24",
          "20x25",
          "10x12-pk3",
          "14x16-pk3",
          "14x20-pk3",
          "14x22-pk3",
          "16x24-pk3",
        ],
      },
      defaultValue: "16x24-pk3",
    },
    fontFamily: {
      control: {
        type: "select",
        options: [
          "fontSvn",
          "fontRoboto",
        ],
      },
    },
    text: {
      control: {
        type: "text",
      },
      defaultValue: "String Test",
    },
    colors: {
      control: {
        type: "select",
        options: [
          "deepKoamaru",
          "white",
          "black",
          "midNightGreen",
          "khaki",
          "electricCrimson",
        ],
      },
      defaultValue: "deepKoamaru",
    },
    fontWeight: {
      control: {
        type: "select",
        options: [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "650",
          "700",
          "800",
          "900",
        ],
      },
      defaultValue: "400",
    },
    general: {
      control: {
        type: "radio",
        options: [
          "uppercase",
          "capitalize",
          "underline",
          "italic",
          "center",
          "justify",
          "left",
          "right",
        ],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["p", "span", "div"],
      },
      defaultValue: "p",
    },
  },
} as Meta;

export const normal: Story = ({
  sizes,
  colors,
  text,
  type,
  general,
  fontWeight,
  fontFamily,
}) => (
  <Text type={type} modifiers={[colors, general, sizes, fontWeight, fontFamily]}>
    {text}
  </Text>
);
