import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import dataDummyBlogTemplate from "./dummyData";

import BlogTemplate from ".";

export default {
    title: "Components/templates/BlogTemplate",
    component: BlogTemplate,
    argTypes: {},
} as ComponentMeta<typeof BlogTemplate>;

const Template: ComponentStory<typeof BlogTemplate> = (args) => <BlogTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   ...dataDummyBlogTemplate,
};

export const Secondary = Template.bind({});
Secondary.args = {};
