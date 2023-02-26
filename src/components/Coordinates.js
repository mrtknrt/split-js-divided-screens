import React from "react";

const Coordinates = ({ width, height }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-6 text-right backgroundColor">
            <div className="fw-bold">Ayarlar</div>
            <div> Top Width: {width} </div> <br />
            <div> Top Height: {height}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinates;
