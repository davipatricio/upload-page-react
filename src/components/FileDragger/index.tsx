import { useEffect, useRef } from "react";
import { DraggerContainer } from "./styles";
import { CloudArrowUp } from "@phosphor-icons/react";

export default function FileDragger() {
  const dropArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropArea.current) return;

    dropArea.current.addEventListener("dragover", () => {
      dropArea.current?.classList.add("dragover");
    });

    dropArea.current.addEventListener("dragleave", () => {
      dropArea.current?.classList.remove("dragover");
    });
  }, [dropArea]);

  return (
    <DraggerContainer ref={dropArea}>
      <CloudArrowUp />

      <h3>Importe seus arquivos</h3>
      <p>Arraste ou clique para fazer upload</p>

      <input type="file" />
    </DraggerContainer>
  );
}
