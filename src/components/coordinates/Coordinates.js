import React from "react";
import "./Coordinate.scss";

const Coordinates = ({
  topRight,
  topLeft,
  bottomRight,
  bottomLeft,
  verticalTop,
  verticalBottom,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="container">
        <div>
          <div className="bold">Ayarlar</div>
        </div>
        <div>
          <div className="bold mt">Yatay Pencere Değerleri</div>
          <div>
            <div>
              {verticalTop} X {verticalBottom}
            </div>
          </div>
        </div>
        <div>
          <div className="bold mt">Üst Dikey Pencere Değerleri</div>
          <div>
            <div>
              {topRight} X {topLeft}
            </div>
          </div>
        </div>
        <div>
          <div className="bold mt">Alt Dikey Pencere Değerleri</div>
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
