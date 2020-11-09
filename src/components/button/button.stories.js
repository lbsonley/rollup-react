import React from "react";
import Button from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"]
      }
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"]
      }
    },
    outline: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    }
  }
};

const Template = (arguments_) => (
  <div>
    <Button {...arguments_}>Click me</Button>
  </div>
);

export const ToggableButton = Template.bind({});

ToggableButton.args = {
  variant: "secondary",
  size: "medium",
  outline: false,
  disabled: false
};
