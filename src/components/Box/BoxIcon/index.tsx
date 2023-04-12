import { BoxProps } from "..";
import { IconContainer } from "./styles";
import { File } from "@phosphor-icons/react";

interface BoxIconProps {
  state: BoxProps["state"];
}

export default function BoxIcon({ state }: BoxIconProps) {
  return (
    <IconContainer state={state}>
      <File weight={'fill'} />
    </IconContainer>
  );
}
