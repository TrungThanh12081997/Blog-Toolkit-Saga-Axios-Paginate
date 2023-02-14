import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutUs from ".";

export default {
  title: "Components/templates/AboutUs",
  component: AboutUs,
  argTypes: {},
} as ComponentMeta<typeof AboutUs>;

const Template: ComponentStory<typeof AboutUs> = (args) => <AboutUs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
