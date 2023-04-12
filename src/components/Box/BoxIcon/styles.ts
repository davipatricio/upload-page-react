import styled from "styled-components";
import { BoxProps } from "..";

interface IconContainerProps {
  state: BoxProps["state"];
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${({ theme, state }) => theme[state].iconBg};
  border-radius: 4px;

  padding: 16px 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
    color: ${({ theme, state }) => theme[state].iconColor};
  }
`;
