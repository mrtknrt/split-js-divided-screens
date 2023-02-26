import React from "react";
import Split from "react-split";
import TableTop from "./components/TableTop";
import Coordinates from "./components/Coordinates";
import TableBottom from "./components/TableBottom";
import TextArea from "./components/TextArea";

export default function MyApp(Component, pageProps) {
  return (
    <Split direction="vertical" style={{ height: "calc(100vh)" }}>
      <Split className="d-flex" direction="horizontal">
        <TableTop />
        <Coordinates />
      </Split>
      <Split className="d-flex" direction="horizontal">
        <TableBottom />
        <TextArea />
      </Split>
    </Split>
  );
}
