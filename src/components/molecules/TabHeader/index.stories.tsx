import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TabHeader from ".";

export default {
  title: "Components/molecules/TabHeader",
  component: TabHeader,
  argTypes: {},
} as ComponentMeta<typeof TabHeader>;

const Template: ComponentStory<typeof TabHeader> = (args) => <TabHeader {...args}  />;

export const Primary = Template.bind({});
Primary.args = {
  title : "Services",
  active:true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {};