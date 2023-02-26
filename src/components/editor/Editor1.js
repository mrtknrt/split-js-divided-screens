import Split from "react-split";

export const Editor1 = () => {
  return (
    <Split direction="vertical" style={{ height: "calc(100vh)" }}>
      <Split className="d-flex" direction="horizontal">
        <div
          className="bg-success"
          style={{ width: "100%", height: "50%" }}
        ></div>
        <div
          className="bg-danger"
          style={{ width: "100%", height: "50%" }}
        ></div>
      </Split>
      <div className="bg-info"></div>
    </Split>
  );
};
