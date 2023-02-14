import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DemoTest from ".";

export default {
  title: "Components/templates/DemoTest",
  component: DemoTest,
  argTypes: {},
} as ComponentMeta<typeof DemoTest>;

const Template: ComponentStory<typeof DemoTest> = (args) => <DemoTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};