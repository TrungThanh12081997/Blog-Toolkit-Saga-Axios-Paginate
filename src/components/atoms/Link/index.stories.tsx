import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import Link from ".";

export default {
  title: "Components/atoms/Link",
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);
export const Internal = Template.bind({});
Internal.args = {
  children: "internal",
  href: "/",
};

export const External = Template.bind({});
External.args = {
  children: "External",
  href: "https://www.google.com/",
};

export const NoHref = Template.bind({});
NoHref.args = {
  children: "no href",
};
