import { Story, Meta } from "@storybook/react";
import React, { useState } from "react";

import Pulldown, { OptionType } from ".";

export default {
  title: "Components/molecules/Pulldown",
  component: Pulldown,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      defaultValue: "Tỉnh / Thành phố",
    },
    variants: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      defaultValue: "primary",
    },
    error: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const options: OptionType[] = [
  {
    id: 1,
    label: "Mặc định",
    value: "default",
  },
  {
    id: 2,
    label: "TP. HCM",
    value: "hcmc",
  },
  {
    id: 3,
    label: "Hà Nội",
    value: "hanoi",
  },
  {
    id: 4,
    label: "Huế",
    value: "hue",
  },
  {
    id: 5,
    label: "Đà Nẵng",
    value: "danang",
  },
];

export const Normal: Story = ({ label, variants, error }) => {
  const [defaultOption, setDefaultOption] = useState<OptionType>();

  return (
    <div style={{
      padding: "20px", background: "white", height: "200vh", width: "75vw",
    }}
    >
      <Pulldown
        error={error}
        placeholder="Placeholder"
        valuePullDown={defaultOption}
        options={options.filter((option: OptionType) => option.id !== defaultOption?.id)}
        handleSelect={(option: OptionType) => setDefaultOption(option)}
        closeOnClickOutside
        label={label}
        variant={variants}
      />
    </div>
  );
};
