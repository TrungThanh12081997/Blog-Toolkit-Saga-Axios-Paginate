import { Story, Meta } from "@storybook/react";
import React from "react";

import Container from ".";

export default {
  title: "Components/organisms/Container",
  component: Container,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "pk3"],
      },
      defaultValue: "default",
    },
    modifier: {
      control: {
        type: "select",
        options: ["default", "fullscreen", "noPaddingLeft", "noPaddingRight"],
      },
      defaultValue: "default",
    },
  },
} as Meta;

export const Normal: Story = ({ modifier }) => (
  <div style={{ backgroundColor: "#fafa" }}>
    <Container modifiers={modifier} >
      <div>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </div>
    </Container>
  </div>
);
