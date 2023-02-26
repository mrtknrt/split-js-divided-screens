import React, { useState } from "react";
import Split from "react-split";
import TableTop from "./components/TableTop";
import Coordinates from "./components/Coordinates";
import TableBottom from "./components/TableBottom";
import TextArea from "./components/TextArea";

export default function MyApp(Component, pageProps) {
  const [topWidth, setTopWidth] = useState(0);
  const [topHeight, setTopHeight] = useState(0);
  const [bottomWidth, setBottomWidth] = useState(0);
  const [bottomHeight, setBottomHeight] = useState(0);

  return (
    <Split direction="vertical" style={{ height: "calc(100vh)" }}>
      <Split
        className="d-flex"
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
        className="d-flex"
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
