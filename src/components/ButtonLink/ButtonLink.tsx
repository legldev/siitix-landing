import React from "react";
import Button from "react-bootstrap/Button";

type Props = {
  onButtonClick: () => void;
  text: string;
};

export const ButtonLink = ({ onButtonClick, text }: Props) => {
  return (
    <Button className="red-btn" onClick={onButtonClick}>
      {text}
    </Button>
  );
};
