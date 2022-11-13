import ArrowDwonIcon from "../../images/productDetail/arrow_down.png";
import CartIcon from "../../images/productDetail/cartIcon.png";
import CurrencyIcon from "../../images/productDetail/currencyIcon.png";
import LanguageIcon from "../../images/productDetail/langIcon.png";
import LogoImg from "../../images/productDetail/Logo.png";
import PhoneIcon from "../../images/productDetail/phoneIcon.png";
import UserIcon from "../../images/productDetail/userIcon.png";
import SearchIcon from "../../images/productDetail/Vector.png";
import { navItem } from "../../data/data";
import { useNavigate } from "react-router-dom";

function SasaHeader() {
  const navigate = useNavigate();
  return (
    <header className="bg-primaryBrown xl:px-[130px] mb-[14px] px-[50px] ">
      <div className="max-w-[1180px] w-full flex justify-between mx-auto gap-[2%]">
        <div className="flex mt-5 bg-[#ffffff] px-[42px] h-[65px]">
          <img
            src={LogoImg}
            alt="logoImg"
            className="h-[65px] max-w-[222px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="grow">
          <div className="flex items-center justify-end h-[50px]">
            <div className="w-[15px] h-[15px] grid place-items-center mr-[10px] cursor-pointer">
              <img src={PhoneIcon} alt="phoneIcon" />
            </div>
            <div className="mr-[5px] flex">
              <div className="w-[15px] h-[15px] grid place-items-center mr-[10px] cursor-pointer">
                <img src={UserIcon} alt="userIcon" />
              </div>
              <div className="w-[15px] h-[15px] grid place-items-center cursor-pointer">
                <img src={CartIcon} alt="cartIcon" />
              </div>
            </div>
            <span className="bg-primaryRed px-[9px] py-[2px] text-[#ffffff] rounded-[10px] text-[12px] leading-[100%] cursor-pointer">
              10
            </span>
            <div className="ml-6 flex justify-between items-center cursor-pointer">
              <div className="w-[15px] h-[15px] grid place-items-center mr-[5px]">
                <img src={LanguageIcon} alt="languageIcon" />
              </div>
              <span>繁體中文</span>
              <div className="w-[15px] h-[15px] grid place-items-center ml-[2px]">
                <img src={ArrowDwonIcon} alt="arrowDwonIcon" />
              </div>
            </div>
            <div className="ml-[10px] flex items-center cursor-pointer">
              <div className="w-[15px] h-[15px] grid place-items-center mr-[5px]">
                <img src={CurrencyIcon} alt="currencyIcon" />
              </div>
              <span>TWD</span>
              <div className="w-[15px] h-[15px] grid place-items-center ml-[2px]">
                <img src={ArrowDwonIcon} alt="arrowDwonIcon" />
              </div>
            </div>
          </div>
          <div className="flex min-h-[50px] py-[12px]">
            <div className="flex gap-[10px] max-w-[685px] flex-wrap justify-start items-start grow">
              {navItem.map(({ title, items }, index) => (
                <div
                  className="mr-5 flex items-center cursor-pointer"
                  key={index}>
                  <div>{title}</div>
                  {items && (
                    <div className="w-[15px] h-[15px] grid place-items-center ml-[3px]">
                      <img src={ArrowDwonIcon} alt="arrowDwonIcon" />
                    </div>
                  )}
                </div>
              ))}
              <div className="grow"></div>
            </div>
            <div className="w-[214px] relative ml-[53px]">
              <input
                className="h-[26px] rounded-[100px] px-[10px] py-1 w-full bg-[#f4f4f4] text-secondaryGary text-3 leading-[150%]"
                placeholder="搜尋商品"
              />
              <div className="w-[14px] h-[14px] grid place-items-center absolute top-[6px] right-[10px]">
                <img src={SearchIcon} alt="searchIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default SasaHeader;
