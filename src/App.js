import React, { useState } from "react";
import Split from "react-split";
import TableTop from "./components/tableTop/TableTop";
import Coordinates from "./components/coordinates/Coordinates";
import TableBottom from "./components/tableBottom/TableBottom";
import TextArea from "./components/textArea/TextArea";

export default function MyApp(Component, pageProps) {
  const [topRight, setTopRight] = useState(0);
  const [topLeft, setTopLeft] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  return (
    <Split direction="vertical" style={{ height: "calc(100vh)" }}>
      <Split
        style={{ display: "flex" }}
        direction="horizontal"
        onDragEnd={(sizes) => {
          setTopLeft(sizes[0]);
          setTopRight(sizes[1]);
        }}
      >
        <TableTop />
        <Coordinates
          topLeft={topLeft}
          topRight={topRight}
          bottomLeft={bottomLeft}
          bottomRight={bottomRight}
        />
      </Split>
      <Split
        style={{ display: "flex" }}
        direction="horizontal"
        onDragEnd={(sizes) => {
          setBottomLeft(sizes[0]);
          setBottomRight(sizes[1]);
        }}
      >
        <TableBottom />
        <TextArea />
      </Split>
    </Split>
  );
}
