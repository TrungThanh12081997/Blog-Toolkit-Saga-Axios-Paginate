import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import icon from "assets/icons/ic_headphone.svg";

import Card from ".";

export default {
    title: "Components/organisms/Card",
    component: Card,
    argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Best Teams",
    description: "Cursus semper tellus volutpat aliquet lacus.",
    icon,
};

export const Secondary = Template.bind({});
Secondary.args = {
   title: "Best Teams",
    icon,
    variant:"blue",
};

export const Third = Template.bind({});
Third.args = {
   title: "Best Teams",
    icon,
    variant:"white",
};