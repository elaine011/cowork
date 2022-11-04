import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import controlLeft from "../../images/icons/reserveControlLeft.png";
import controlRight from "../../images/icons/reserveControlRight.png";
import productControlRight from "../../images/productDetail/arrow_right.png";
import productControlLeft from "../../images/productDetail/arrow_left.png";

type PropsType = {
  images: string[];
};

function Carousell({ images }: PropsType) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const touchPosition = useRef({ start: 0, end: 0 });

  const observer = useRef<IntersectionObserver | null>(null);
  const listenerTarget = useCallback(
    (node: HTMLVideoElement | HTMLImageElement | null) => {
      if (node) {
        const options = {
          rootMargin: "0px",
          threshold: 0,
        };
        const callback = (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting) {
            clearInterval(intervalId.current);
            return;
          }
          clearInterval(intervalId.current);
          intervalId.current = setInterval(() => {
            setCurImgIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );
          }, 3000);
        };
        observer.current = new IntersectionObserver(callback, options);
        observer.current.observe(node);
      }
    },
    []
  );

  const [curImgIndex, setCurImgIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timer>();
  useEffect(() => {
    if (currentUrl === "/reserve") {
      intervalId.current = setInterval(() => {
        setCurImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
  }, []);
  return (
    <div
      className={`flex relative ${
        currentUrl === "/productDetail" ? "h-[703px]" : "h-[340px]"
      } `}>
      {currentUrl !== "/productDetail" && (
        <span className="absolute right-[20px] top-[20px] text-[12px] w-[40px] h-[20px] text-center bg-[#979797] rounded-[10px] text-white flex items-center justify-center">
          {curImgIndex + 1}/{images.length}
        </span>
      )}
      <div
        onTouchStart={(e) => {
          clearInterval(intervalId.current);
          touchPosition.current = {
            ...touchPosition.current,
            start: e.targetTouches[0].pageX,
          };
        }}
        onTouchMove={(e) =>
          (touchPosition.current = {
            ...touchPosition.current,
            end: e.targetTouches[0].pageX,
          })
        }
        onTouchEnd={() => {
          if (touchPosition.current.start - touchPosition.current.end < 0) {
            setCurImgIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );
            touchPosition.current = { start: 0, end: 0 };
            return;
          }
          setCurImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          touchPosition.current = { start: 0, end: 0 };
          intervalId.current = setInterval(() => {
            setCurImgIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );
          }, 3000);
        }}>
        {images.map((img, index) => {
          return img.split(".").includes("mp4") ? (
            <video
              src={img}
              className="absolute w-[504px] h-[677px]"
              autoPlay
              muted
              key={index}
              controls
              style={{
                left:
                  currentUrl === "/productDetail"
                    ? index * 510 - curImgIndex * 510
                    : index * 450 - curImgIndex * 450,
              }}
              ref={listenerTarget}
              onEnded={() =>
                (intervalId.current = setInterval(() => {
                  setCurImgIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }, 3000))
              }
            />
          ) : (
            <img
              src={img}
              alt="productImage"
              className={`absolute ${
                currentUrl === "/productDetail" ? "" : "top-[-40px] scale-[0.8]"
              } `}
              style={{
                left:
                  currentUrl === "/productDetail"
                    ? index * 510 - curImgIndex * 510
                    : index * 450 - curImgIndex * 450,
              }}
              onMouseEnter={() => clearInterval(intervalId.current)}
              onMouseLeave={() => {
                intervalId.current = setInterval(() => {
                  setCurImgIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }, 3000);
              }}
              key={index}
            />
          );
        })}
      </div>

      <button
        className={`${
          currentUrl === "/productDetail"
            ? curImgIndex === 0
              ? "hidden"
              : "block"
            : ""
        } absolute top-[46%] left-[20px]`}
        onClick={() =>
          setCurImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }>
        <img
          src={
            currentUrl === "/productDetail" ? productControlLeft : controlLeft
          }
          alt="imgControler"
        />
      </button>
      <button
        className={`${
          currentUrl === "/productDetail"
            ? curImgIndex === images.length - 1
              ? "hidden"
              : "block"
            : ""
        } absolute top-[46%] right-[20px]`}
        onClick={() =>
          setCurImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }>
        <img
          src={
            currentUrl === "/productDetail" ? productControlRight : controlRight
          }
          alt="imgControler"
        />
      </button>
      <div className="absolute bottom-0 flex gap-[10px] w-full justify-center">
        {images.map((_, index) => {
          return (
            <button
              className={`${
                currentUrl === "/productDetail"
                  ? `w-[8px] h-[8px] ${
                      curImgIndex === index
                        ? "bg-[#4b4e5b] border-[#4b4e5b] "
                        : "bg-[#d8d9d8] border-[#d8d9d8] "
                    }`
                  : `w-[13px] h-[13px] border-borderGray ${
                      curImgIndex === index ? "bg-borderGray " : "bg-white"
                    }`
              }  border border-solid rounded-[50%]`}
              onClick={() => {
                clearInterval(intervalId.current);
                setCurImgIndex(index);
                intervalId.current = setInterval(() => {
                  setCurImgIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }, 3000);
              }}
              key={index}></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousell;
