import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutCard from ".";

export default {
  title: "Components/molecules/AboutCard",
  component: AboutCard,
  argTypes: {},
} as ComponentMeta<typeof AboutCard>;

const Template: ComponentStory<typeof AboutCard> = (args) => <div style={{ maxWidth:"200px" }}><AboutCard {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  title: "About us",
  contentButton:"More on Our History",
  description:"For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.",
};

export const Secondary = Template.bind({});
Secondary.args = {};