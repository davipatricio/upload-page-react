import styled from "styled-components";
import { BoxProps } from ".";

interface BoxContainerProps {
  state: BoxProps["state"];
}

export const BoxContainer = styled.div<BoxContainerProps>`
  padding: 8px;

  background: #ffffff;
  box-shadow: 0px 4px 16px #eae2fd;
  border-radius: 8px;

  display: flex;
  gap: 12px;

  position: relative;
`;
