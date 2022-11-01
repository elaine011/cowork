import { images } from "../../../data/data";

function SlideImg() {
  return (
    <div className="flex justify-between">
      {images.map((img, index) =>
        index <= 4 ? (
          <div key={img.id}>
            <img
              src={img.src}
              className="bg-primaryPageBackgroundGray w-[82px] cursor-pointer"
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
