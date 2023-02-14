import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from ".";

export default {
  title: "Components/atoms/Loading",
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
