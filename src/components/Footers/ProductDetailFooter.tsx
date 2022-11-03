import socialMedia from "../../images/productDetail/social_media.png";
import fbIcon from "../../images/productDetail/fbIcon.png";
import lineIcon from "../../images/productDetail/lineIcon.png";
import igIcon from "../../images/productDetail/igIcon.png";
import googlePlay from "../../images/productDetail/google_play.png";
import appStore from "../../images/productDetail/app_store.png";
import FunctionButton from "../Common/FunctionButton";

const quickLink = [
  {
    title: "關於我們",
    link: ["品牌故事", "商店簡介", "門市資訊", "隱私權條款"],
  },
  { title: "購物說明", link: ["付款方式", "運送方式", "退換貨方式"] },
  {
    title: "客服資訊",
    link: ["客服留言", "常見問題", "會員權益聲明", "聯絡我們"],
  },
];
function ProductDetailFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 pl-[120px] pr-[156px] pt-[40px] pb-[24px] border-t border-solid border-[#e5e5e5]">
      <div className="flex justify-between">
        <div className="w-[340px]">
          <img src={socialMedia} alt="social_media" className="mb-[8px]" />
          <ul className="flex gap-[8px] mb-[8px]">
            <li>
              <button>
                <img src={fbIcon} alt="social_icon" />
              </button>
            </li>
            <li>
              <button>
                <img src={lineIcon} alt="social_icon" />
              </button>
            </li>
            <li>
              <button>
                <img src={igIcon} alt="social_icon" />
              </button>
            </li>
          </ul>
        </div>
        <ul className="flex text-[#333333] justify-center grow">
          {quickLink.map(({ title, link }, index) => {
            return (
              <li key={index} className="mr-[116px]">
                <h3 className="font-normal mb-[8px]">{title}</h3>
                {link.map((linkText, index) => {
                  return (
                    <button
                      className="block mb-[8px] hover:text-primaryBlue text-[12px]"
                      key={index}>
                      {linkText}
                    </button>
                  );
                })}
              </li>
            );
          })}
        </ul>
        <div className="w-[200px]">
          <h3 className="mb-[8px]">官方APP</h3>
          <input
            type="text"
            id="email"
            placeholder="請輸入台灣手機號碼"
            className="text-[14px] text-[#bbbbbb] pl-[10px] border border-solid border-borderGray h-[40px] w-full rounded-[5px] placeholder:text-[#bbbbbb] mb-[8px]"
          />
          <div className="mb-[8px]">
            <FunctionButton
              text="免費傳送載點至手機"
              fontSize="12px"
              textColor="white"
              textPosition="left"
              bgColor="#333333"
              letterSpacing={0}
              width="full"
            />
          </div>
          <div className="flex justify-between">
            <img
              src={googlePlay}
              alt="google_play_image"
              className="cursor-pointer"
            />
            <img
              src={appStore}
              alt="app_store_image"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[#bbbbbb] text-[12px]">
          @ 2015 by 紘瑞國際股份有限公司
        </p>
        <p className="w-[400px] text-[#bbbbbb] text-[12px]">
          本站最佳瀏覽環境請使用Google Chrome、Firefox或Edge以上版本
        </p>
      </div>
    </footer>
  );
}

export default ProductDetailFooter;
