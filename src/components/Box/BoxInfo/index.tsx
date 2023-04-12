import { ArrowCounterClockwise } from "@phosphor-icons/react";
import { BoxProps } from "..";
import { InfoContainer } from "./styles";

type BoxInfoProps = BoxProps;

export default function BoxInfo({
  filename,
  filesize,
  progress,
  state,
}: BoxInfoProps) {
  return (
    <InfoContainer state={state}>
      <p className="filename">{filename}</p>
      <p className="filesize">{filesize}</p>

      <div className="bar">
        <progress value={progress} max="100" />
        <span>{progress}%</span>
      </div>

      <ArrowCounterClockwise className="retry" />
    </InfoContainer>
  );
}
