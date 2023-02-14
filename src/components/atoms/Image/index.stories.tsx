import { Story, Meta } from "@storybook/react";
import React from "react";
// import logo from "assets/images/logo.svg";

import Image from ".";


export default {
  title: "Components/atoms/Image",
  component: Image,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
      defaultValue: "data:image/jpeg;base64,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",
    },
    ratio: {
      control: {
        type: "select",
        options: ["1x1", "4x3", "16x9", "logo"],
      },
      defaultValue: "logo",
    },
    size: {
      control: {
        type: "select",
        options: ["cover", "contain", "inherit", "initial"],
      },
      defaultValue: "cover",
    },
    maxWidth: {
      control: {
        type: "text",
      },
      defaultValue: "200px",
    },
  },
} as Meta;

export const normal: Story = ({
  src, ratio, size, maxWidth,
}) => (
  <div style={{ maxWidth }}>
    <Image
      src={src}
      ratio={ratio}
      size={size}
      alt="image"
    />
  </div>
);
