import React from "react";
import Split from "react-split";

export default function MyApp(Component, pageProps) {
  return (
    <Split direction="vertical" style={{ height: "calc(100vh)" }}>
      <Split className="d-flex" direction="horizontal">
        <div className="bg-success" style={{ width: "100%" }}></div>
        <div className="bg-danger" style={{ width: "100%" }}></div>
      </Split>
      <Split className="d-flex" direction="horizontal">
        <div className="bg-success" style={{ width: "100%" }}></div>
        <div className="bg-danger" style={{ width: "100%" }}></div>
      </Split>
    </Split>
  );
}
