import ArrowDwonIcon from "../../images/productDetail/arrow_down.png";
import { sideBarData } from "../../data/data";

function SasaSideBar() {
  return (
    <div className="text-thirdGray w-[265px]">
      {sideBarData.map((item, index) =>
        item.items ? (
          <details key={index}>
            <summary className="mb-3 hover:text-[#333333] list-none flex justify-between pr-[50px] items-center cursor-pointer">
              {item.title}
              <div className="grid place-items-center mr-[10px]">
                <img
                  src={ArrowDwonIcon}
                  alt="arrowDownIcon"
                  className="w-[16px] h-[16px]"
                />
              </div>
            </summary>
            <div className="cursor-pointer flex flex-col ml-[18px]">
              {item.items.map((item, index) => (
                <div
                  className="mb-3 hover:text-[#333333] hover:underline"
                  key={index}>
                  {item}
                </div>
              ))}
            </div>
          </details>
        ) : (
          <div className="mb-3 hover:text-[#333333] cursor-pointer" key={index}>
            {item.title}
          </div>
        )
      )}
    </div>
  );
}
export default SasaSideBar;
