import { Story, Meta } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Pagination from ".";

export default {
  title: "Components/organisms/Pagination",
  component: Pagination,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ padding: 20 }}>
      <Pagination
        totalPage={50}
        handleChangePage={(e)=>console.log(e)}
        
      />
    </div>
  </BrowserRouter>
);
