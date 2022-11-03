import { useState } from "react";

type ManifierPropsType = {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
};

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
}: ManifierPropsType) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
        cursor: "none",
      }}
    >
      <img
        src={src}
        style={{ height, width }}
        alt="productImg"
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
      />
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1",
          border: "2px solid #494948",
          boxShadow: "3px 1px 3px 0 #6d6d6c",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#242424",
            width: "10px",
            height: "25px",
            borderRadius: "16px 16px 0 0",
            bottom: "-8px",
            right: "0",
            transform: "rotate(134deg)",
            boxShadow: "1px -3px 2px 0 #000",
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundColor: "lightgray",
              width: "2px",
              height: "16px",
              left: "1px",
              bottom: "6px",
              borderRadius: "16px 16px 0 0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default ImageMagnifier;
