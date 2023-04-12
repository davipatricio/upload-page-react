import styled from "styled-components";
import { BoxProps } from "..";

interface InfoContainerProps {
  state: BoxProps["state"];
}

export const InfoContainer = styled.div<InfoContainerProps>`
  flex: 1;

  .filename {
    font-size: 14px;
    font-weight: 700;
    color: #575361;
  }

  .filesize {
    color: #857e95;
    font-weight: 500;
    font-size: 12px;
  }

  /* Progress */
  .bar {
    display: flex;
    align-items: center;
    gap: 8px;

    line-height: 0;
    margin-top: 4px;
  }

  progress {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    border-radius: 999px;
    overflow: hidden;
  }

  progress::-webkit-progress-bar {
    background: #e3e3ed;
  }

  progress::-webkit-progress-value {
    background: ${({ theme, state }) => theme[state].progressColor};
  }

  .bar span {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme, state }) => theme[state].progressText};
  }

  /* Action */
  svg.retry {
    position: absolute;
    top: 8px;
    right: 8px;

    color: #794fed;

    cursor: pointer;
  }
`;
