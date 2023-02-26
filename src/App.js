import React, { useState } from "react";
import Split from "react-split";
import TableTop from "./components/tableTop/TableTop";
import Coordinates from "./components/coordinates/Coordinates";
import TableBottom from "./components/tableBottom/TableBottom";
import TextArea from "./components/textArea/TextArea";

export default function MyApp(Component, pageProps) {
  const [topWidth, setTopWidth] = useState(0);
  const [topHeight, setTopHeight] = useState(0);
  const [bottomWidth, setBottomWidth] = useState(0);
  const [bottomHeight, setBottomHeight] = useState(0);

  return (
    <Split direction="vertical" style={{ height: "calc(100vh)" }}>
      <Split
        style={{ display: "flex" }}
        direction="horizontal"
        onDragEnd={(sizes) => {
          setTopWidth(sizes[0]);
          setTopHeight(sizes[1]);
        }}
      >
        <TableTop />
        <Coordinates width={topWidth} height={topHeight} />
      </Split>
      <Split
        style={{ display: "flex" }}
        direction="horizontal"
        onDragEnd={(sizes) => {
          setBottomWidth(sizes[0]);
          setBottomHeight(sizes[1]);
        }}
      >
        <TableBottom />
        <TextArea />
      </Split>
    </Split>
  );
}
