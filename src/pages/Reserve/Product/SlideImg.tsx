import { images } from "../../../data/data";

function SlideImg() {
  return (
    <div className="flex justify-between">
      {images.map((img, index) =>
        index <= 4 ? (
          <div>
            <img
              src={img.src}
              key={img.id}
              className="bg-primaryPageBackgroundGray w-[82px]"
            />
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
}
export default SlideImg;
