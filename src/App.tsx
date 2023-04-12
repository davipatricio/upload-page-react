import "./App.css";
import Box from "./components/Box";
import FileDragger from "./components/FileDragger";

function App() {
  return (
    <>
      <FileDragger />

      <section className="files">
        <Box
          state="uploading"
          filename="Scann_158.pdf"
          filesize="30 MB"
          progress={46}
        />
        <Box
          state="done"
          filename="README.md"
          filesize="12 KB"
          progress={100}
        />
        <Box
          state="error"
          filename="picture1.jpeg"
          filesize="6.3 MB"
          progress={0}
        />
      </section>
    </>
  );
}

export default App;
