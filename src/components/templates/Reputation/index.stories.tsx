import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import icon from "assets/icons/ic_headphone.svg";

import Reputation from ".";

export default {
    title: "Components/templates/Reputation",
    component: Reputation,
    argTypes: {},
} as ComponentMeta<typeof Reputation>;

const Template: ComponentStory<typeof Reputation> = (args) => <Reputation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Our Reputation",
    dataReputation: new Array(3).fill({
        title: "Best Teams",
        description: "Cursus semper tellus volutpat aliquet lacus.",
        icon,
    }),
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: "Services",
    dataReputation: [
        {
            icon,
            title: "Construction",
            variant: "white",
        },
        {
            icon,
            title: "Construction",
            variant: "blue",
        },
        {
            icon,
            title: "Construction",
            variant: "white",
        },
          {
            icon,
            title: "Construction",
            variant: "blue",
        },
         {
            icon,
            title: "Construction",
            variant: "white",
        },
      
        {
            icon,
            title: "Construction",
            variant: "blue",
        },
    ],
};
