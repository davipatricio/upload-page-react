import BoxIcon from "./BoxIcon";
import BoxInfo from "./BoxInfo";
import { BoxContainer } from "./styles";

export interface BoxProps {
  state: "done" | "uploading" | "error";
  filename: string;
  filesize: string;
  progress: number;
}

export default function Box(props: BoxProps) {
  return (
    <BoxContainer state={props.state}>
      <BoxIcon state={props.state} />

      <BoxInfo {...props} />
    </BoxContainer>
  );
}
