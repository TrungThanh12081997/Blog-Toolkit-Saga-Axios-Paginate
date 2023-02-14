import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DetailComponent from ".";

export default {
  title: "Components/templates/DetailComponent",
  component: DetailComponent,
  argTypes: {},
} as ComponentMeta<typeof DetailComponent>;

const Template: ComponentStory<typeof DetailComponent> = (args) => <DetailComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title:"lorem ipsum", description:"lorem ipsum", id:"1", author:"fake name",
};

export const Secondary = Template.bind({});
Secondary.args = {};