import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import dummyDataHeader from "./dummyDataHeader";

import Header from ".";

export default {
  title: "Components/organisms/Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  arrayNav : dummyDataHeader,
};

export const Secondary = Template.bind({});
Secondary.args = {};