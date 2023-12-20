import { Button } from "@mui/material";
import React, { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const HypButton: React.FC<ButtonProps> = () => {
  return <Button>Button</Button>;
};

export default HypButton;
