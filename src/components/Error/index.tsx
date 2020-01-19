import React, { FC } from "react";
import { ErrorMessage } from "./index.styled";

interface IError {
  message: string;
}

const Error: FC<IError> = ({ message }) => {
  return <ErrorMessage data-testid="error-message">{message}</ErrorMessage>;
};

export default Error;
