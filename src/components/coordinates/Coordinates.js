import React from "react";

const Coordinates = ({ width, height }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="container">
        <div className="row">
          <div className="backgroundColorCordinates">
            <div className="fw-bold">Ayarlar</div>
            <div className="fw-bold"> Top Width: {width} </div> <br />
            <div className="fw-bold"> Top Height: {height}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinates;
