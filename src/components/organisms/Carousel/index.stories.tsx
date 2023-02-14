import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from ".";

export default {
  title: "Components/organisms/Carousel",
  component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
