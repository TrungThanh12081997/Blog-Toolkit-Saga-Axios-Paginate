import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import dummyData from "./dummyData";

import RegisterForm from ".";

export default {
    title: "Components/organisms/RegisterForm",
    component: RegisterForm,
    argTypes: {},
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
    <div style={{ minHeight: "100vh" }}>
        <RegisterForm {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    ...dummyData,
};

export const Secondary = Template.bind({});
Secondary.args = {};
