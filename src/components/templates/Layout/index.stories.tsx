import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from ".";

export default {
  title: "Components/templates/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};