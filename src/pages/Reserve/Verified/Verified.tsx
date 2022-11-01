import { useEffect, useState } from "react";
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

  useEffect(() => {
    setRegisterInfo(
      JSON.parse(sessionStorage.getItem("registerInfo") as string) ?? {}
    );
  }, []);

  return (
    registerInfo.user && (
      <>
        <div className="flex items-center flex-col px-[18px] pt-[30px] pb-5">
          <h1 className="text-[24px] leading-10 font-bold mb-[2px]">
            恭喜您！驗證成功
          </h1>
          <img src={Heart} className="w-[191px]" />
          <>
            <span className="leading-6">已完成 iphone 13 登記</span>
            <span className="leading-6 mb-5">敬請等候開賣通知</span>
          </>
          <Hint
            text={
              "注意：簡訊驗證通過才算有登記，完成登記的手機號碼需與會員手機號碼相同，每人限購一支"
            }
            fontSize={"16px"}
          />
        </div>
        <div className="bg-primaryPageBackgroundGray px-4 py-[30px] text-[14px] leading-6 text-[#333333]">
          <>
            <h3 className="font-bold">登記資訊如下：</h3>
            <hr className="border border-solid border-[#d8d8d8] mt-[9px] mb-[15px]" />
          </>
          <div className="px-[7px]">
            <div className="flex justify-between mb-[10px]">
              <h3 className="font-bold">登記狀態</h3>
              <h3 className="font-bold">驗證通過</h3>
            </div>
            <div>
              <h3 className="font-bold mb-[10px]">商品資訊</h3>
              <div className="pl-[10px]">
                <div className="flex justify-between">
                  <div>商品</div>
                  <div className="font-medium">
                    {registerInfo.product.model}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>商品選項</div>
                  <div className="font-medium">{`${registerInfo.product.model}, ${registerInfo.product.capacity} ${registerInfo.product.color}`}</div>
                </div>
                <div className="flex justify-between">
                  <div>商品數量</div>
                  <div className="font-medium">1</div>
                </div>
                <div className="flex justify-between">
                  <div>單價</div>
                  <div className="font-medium text-primaryRed">
                    NT${handlePriceCommas(registerInfo.product.price)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[34px]">
              <h3 className="font-bold mb-[10px]">個人資訊</h3>
              <div className="pl-[10px]">
                <div className="flex justify-between">
                  <div>姓名</div>
                  <div className="font-medium">
                    {registerInfo.user.userName}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>手機號碼</div>
                  <div className="font-medium">{registerInfo.user.phone}</div>
                </div>
                <div className="flex justify-between">
                  <div>Email</div>
                  <div className="font-medium">{registerInfo.user.mail}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[30px] py-10 mb-[97px]">
          <ActivityStatement />
        </div>
        <ReserveFooter
          functionButtonText={"加入會員"}
          wrapperContext={"center"}
          hint={"立刻加入會員，開賣通知不漏接！"}
        />
      </>
    )
  );
}

export default Verified;
