import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityStatement from "../../../components/Common/ActivityStatement";
import Hint from "../../../components/Common/Hint";
import ReserveFooter from "../../../components/Footers/ReserveFooter";
import Heart from "../../../images/icons/heart.png";
import { handlePriceCommas } from "../../../utils/handlePriceCommas";

type registerInfoType = {
  user: {
    userName: string;
    phone: number;
    mail: string;
  };
  product: {
    model: string;
    color: string;
    capacity: string;
    price: number;
  };
};

function Verified() {
  const [registerInfo, setRegisterInfo] = useState({} as registerInfoType);
  const navigate = useNavigate();

  useEffect(() => {
    setRegisterInfo(
      JSON.parse(sessionStorage.getItem("registerInfo") as string) ?? {}
    );
  }, []);

  function clickFn() {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    registerInfo.user && (
      <>
        <div className="flex items-center flex-col px-[18px] pt-[30px] pb-5 md:pt-[59px] md:pb-[30px]">
          <h1 className="text-[24px] leading-10 font-bold mb-[2px] md:text-[64px] md:mb-[53px]">
            恭喜您！驗證成功
          </h1>
          <img src={Heart} className="w-[191px]" />
          <>
            <span className="leading-6 md:mt-5 md:text-[24px] md:mb-[15px]">
              已完成 iphone 13 登記
            </span>
            <span className="leading-6 mb-5 md:text-[24px]">
              敬請等候開賣通知
            </span>
          </>
          <div className="text-center">
            <Hint
              text={
                "注意：簡訊驗證通過才算有登記，完成登記的手機號碼需與會員手機號碼相同，每人限購一支"
              }
            />
          </div>
        </div>
        <div className="bg-primaryPageBackgroundGray px-4 py-[30px] text-[14px] leading-6 text-[#333333]">
          <div className="md:max-w-[750px] md:mx-auto md:text-[24px]">
            <>
              <h3 className="font-bold">登記資訊如下：</h3>
              <hr className="border border-solid border-[#d8d8d8] mt-[9px] mb-[15px] md:mt-4 md:mb-[30px]" />
            </>
            <div className="px-[7px] md:max-w-[750px] md:mx-auto">
              <div className="flex justify-between mb-[10px] md:mb-[30px]">
                <h3 className="font-bold">登記狀態</h3>
                <h3 className="font-bold">驗證通過</h3>
              </div>
              <div>
                <h3 className="font-bold mb-[10px] md:mb-[25px]">商品資訊</h3>
                <div className="pl-[10px]">
                  <div className="flex justify-between md:leading-[48px]">
                    <div>商品</div>
                    <div className="font-medium">
                      {registerInfo.product.model}
                    </div>
                  </div>
                  <div className="flex justify-between md:leading-[48px]">
                    <div>商品選項</div>
                    <div className="font-medium">{`${registerInfo.product.model}, ${registerInfo.product.capacity} ${registerInfo.product.color}`}</div>
                  </div>
                  <div className="flex justify-between md:leading-[48px]">
                    <div>商品數量</div>
                    <div className="font-medium">1</div>
                  </div>
                  <div className="flex justify-between md:leading-[48px]">
                    <div>單價</div>
                    <div className="font-medium text-primaryRed">
                      NT${handlePriceCommas(registerInfo.product.price)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[34px] md:mt-[82px]">
                <h3 className="font-bold mb-[10px]">個人資訊</h3>
                <div className="pl-[10px]">
                  <div className="flex justify-between md:leading-[48px]">
                    <div>姓名</div>
                    <div className="font-medium">
                      {registerInfo.user.userName}
                    </div>
                  </div>
                  <div className="flex justify-between md:leading-[48px]">
                    <div>手機號碼</div>
                    <div className="font-medium">{registerInfo.user.phone}</div>
                  </div>
                  <div className="flex justify-between md:leading-[48px]">
                    <div>Email</div>
                    <div className="font-medium">{registerInfo.user.mail}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:bg-primaryPageBackgroundGray">
          <div className="px-[30px] py-10 mb-[97px] md:max-w-[1080px] md:mx-auto md:pb-[296px] ">
            <ActivityStatement />
          </div>
        </div>
        <ReserveFooter
          functionButtonText={"加入會員"}
          wrapperContext={"center"}
          hint={"立刻加入會員，開賣通知不漏接！"}
          clickFn={clickFn}
        />
      </>
    )
  );
}

export default Verified;
