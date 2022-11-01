import e from "express";
import { useEffect, useRef, useState } from "react";
import { images } from "../../../data/data";
import controlLeft from "../../../images/icons/reserveControlLeft.png";
import controlRight from "../../../images/icons/reserveControlRight.png";

function Carousell() {
  const [curImgIndex, setCurImgIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timer>();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    intervalId.current = timer;
  }, []);
  return (
    <div
      className="flex relative h-[340px]"
      onMouseEnter={() => clearInterval(intervalId.current)}
      onMouseLeave={() => {
        intervalId.current = setInterval(() => {
          setCurImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);
      }}>
      <span className="absolute right-[20px] top-[20px] text-[12px] w-[40px] h-[20px] text-center bg-[#979797] rounded-[10px] text-white flex items-center justify-center">
        {curImgIndex + 1}/{images.length}
      </span>
      <div>
        {images.map(({ id, src }, index) => {
          return (
            <img
              src={src}
              alt="productImage"
              className="absolute top-[-40px] scale-[0.8]"
              style={{ left: index * 450 - curImgIndex * 450 }}
              key={`${id}-${index}`}
            />
          );
        })}
      </div>

      <button
        className="absolute top-[46%] left-[20px]"
        onClick={() =>
          setCurImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }>
        <img src={controlLeft} alt="imgControler" />
      </button>
      <button
        className="absolute top-[46%] right-[20px]"
        onClick={() =>
          setCurImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }>
        <img src={controlRight} alt="imgControler" />
      </button>
      <div className="absolute bottom-0 flex gap-[10px] w-full justify-center">
        {images.map((_, index) => {
          return (
            <button
              className={`${
                curImgIndex === index ? "bg-borderGray" : "bg-white"
              } w-[13px] h-[13px] border border-solid border-borderGray rounded-[50%]`}
              onClick={() => setCurImgIndex(index)}></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousell;
