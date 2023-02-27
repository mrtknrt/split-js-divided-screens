import React from "react";
import "./Coordinate.scss";

const Coordinates = ({ topRight, topLeft, bottomRight, bottomLeft }) => {
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
              {topRight} X {topLeft}
            </div>
          </div>
        </div>
        <div>
          <div className="bold mt">Top Vertical Panel's Coordinates</div>
          <div>
            <div>
              {topRight} X {topLeft}
            </div>
          </div>
        </div>
        <div>
          <div className="bold mt">Bottom Vertical Panel's Coordinates</div>
          <div>
            <div>
              {bottomLeft} X {bottomRight}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinates;
