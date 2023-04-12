import styled from "styled-components";

export const DraggerContainer = styled.section`
  background: #f3f0ff;
  border: 1px dashed #c1b2fa;
  border-radius: 8px;

  text-align: center;
  padding: 28px 0 32px;

  position: relative;

  input {
    all: unset;
    opacity: 0;
    inset: 0;
    position: absolute;
  }

  svg {
    font-size: 48px;
    color: #7c3aed;
  }

  h3 {
    margin-top: 12px;

    color: #7a5fec;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: #746e82;
  }

  &.dragover {
    background: #ebe6ff;
  }
`;
