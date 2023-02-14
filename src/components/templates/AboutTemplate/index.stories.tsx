import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutTemplate from ".";

export default {
  title: "Components/templates/AboutTemplate",
  component: AboutTemplate,
  argTypes: {},
} as ComponentMeta<typeof AboutTemplate>;

const Template: ComponentStory<typeof AboutTemplate> = (args) => <AboutTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};