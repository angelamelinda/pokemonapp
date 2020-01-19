import styled from "styled-components";
import { COLOR } from "../../constants";

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: calc(14 / 16 * 1rem);
  color: ${COLOR.RED};
  margin-top: 20px;
  margin-bottom: 20px;
`;
