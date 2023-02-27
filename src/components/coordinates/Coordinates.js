import React from "react";
import "./Coordinate.scss";

const Coordinates = ({ width, height, bottomWidth, bottomHeight }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="container">
        <div>
          <div className="bold">Settings</div>
        </div>
        <div>
          <div className="bold mt">Horizontal Panel's Coordinates</div>
          <div>
            <div>
              {width} x {height}
            </div>
          </div>
        </div>
        <div>
          <div className="bold mt">Top Vertical Panel's Coordinates</div>
          <div>
            <div>
              {width} x {height}
            </div>
          </div>
        </div>
        <div>
          <div className="bold mt">Bottom Vertical Panel's Coordinates</div>
          <div>
            <div>
              {bottomWidth} x {bottomHeight}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinates;
