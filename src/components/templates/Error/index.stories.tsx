import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Error from ".";

export default {
  title: "Components/templates/Error",
  component: Error,
  argTypes: {},
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
