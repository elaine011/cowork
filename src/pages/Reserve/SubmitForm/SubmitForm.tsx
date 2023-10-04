import Header from "./Header";
import ReserveFooter from "../../../components/Footers/ReserveFooter";
import ValidationErrorText from "../../../components/Common/ValidationErrorText";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  userName: string;
  phone: string;
  mail: string;
  termsCheck: boolean;
};
function SubmitForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ userName, mail, phone }) => {
    sessionStorage.setItem(
      "registerInfo",
      JSON.stringify({ user: { userName, mail, phone } })
    );
    navigate("/reserve/product");
  };
  return (
    <>
      <div className="fixed right-0 left-0 top-0 bottom-0 md:bg-primaryPageBackgroundGray z-[-50]"></div>
      <main className="md:px-4 md:mb-[100px]">
        <Header />
        <div className="py-[17px] bg-white md:py-[60px] max-w-[1080px] mx-auto">
          <div className="w-[335px] mx-auto">
            <form id="userInfo" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[10px]">
                <span className="text-primaryRed mr-1">*</span>
                <label htmlFor="name">姓名</label>
              </div>
              <input
                type="text"
                id="name"
                {...register("userName", {
                  required: true,
                  maxLength: 7,
                  min: 2,
                  pattern: /^[\u4e00-\u9fa5]+$/i,
                })}
                placeholder="輸入中文姓名，限制 2~7 個字"
                className={`text-[14px] pl-[10px] border border-solid ${
                  errors.userName?.type
                    ? "border-primaryRed"
                    : "border-borderGray"
                }  h-[40px] w-full rounded-[5px] ${
                  errors.userName?.type ? "mb-0" : "mb-[15px]"
                }`}
              />
              {errors.userName?.type && (
                <ValidationErrorText text="請輸入中文姓名，限制2~7個字" />
              )}
              <div className="mb-[10px]">
                <span className="text-primaryRed mr-1">*</span>
                <label htmlFor="phone">手機號碼 (需通過簡訊驗證)</label>
              </div>
              <div
                className={`flex ${
                  errors.phone?.type ? "mb-0" : "mb-[10px]"
                } gap-[5px]`}>
                <select className="pl-[10px] w-[116px] border border-solid border-borderGray rounded-[5px] h-[40px] bg-[#f4f4f4] text-thirdGray">
                  <option value="+886">+886</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    maxLength: 10,
                    pattern: /^[0](?=9)\d{9}$/,
                  })}
                  placeholder="輸入手機號碼"
                  className={`grow text-[14px] pl-[10px] border border-solid ${
                    errors.phone?.type
                      ? "border-primaryRed"
                      : "border-borderGray"
                  } h-[40px] rounded-[5px]`}
                />
              </div>
              {errors.phone?.type && (
                <ValidationErrorText text="手機號碼格式錯誤，請重新輸入" />
              )}
              <div className="mb-[10px]">
                <span className="text-primaryRed mr-1">*</span>
                <label htmlFor="email">
                  Email 信箱 (開賣時用此 Email 通知)
                </label>
              </div>
              <input
                type="text"
                id="email"
                placeholder="輸入 Email"
                {...register("mail", {
                  required: true,
                  pattern: /^[0-9a-zA-Z]+@(([a-zA-Z]+)[.])+[a-z]{2,4}$/,
                })}
                className={`text-[14px] pl-[10px] border border-solid ${
                  errors.mail?.type ? "border-primaryRed" : "border-borderGray"
                } h-[40px] w-full rounded-[5px] ${
                  errors.mail?.type ? "mb-0" : "mb-[10px]"
                }`}
              />
              {errors.mail?.type && (
                <ValidationErrorText text="Email 格式錯誤，請重新輸入" />
              )}
              <div className="flex items-center gap-[6px]">
                <input
                  type="checkbox"
                  id="termsCheck"
                  {...register("termsCheck", {
                    required: true,
                  })}
                  className={`rounded-[3px] w-[16px] h-[16px] border border-solid ${
                    errors.termsCheck?.type
                      ? "border-primaryRed"
                      : "border-[#bbbbbb]"
                  }`}
                />
                <label htmlFor="termsCheck">
                  我已經閱讀並同意{" "}
                  <button
                    className="text-primaryBlue hover:underline"
                    type="button">
                    隱私權及網站使用條款
                  </button>
                </label>
              </div>
              {errors.termsCheck?.type && (
                <ValidationErrorText text="請確認同意隱私權及網站使用條款" />
              )}
            </form>
          </div>
        </div>
      </main>
      <ReserveFooter functionButtonText="選擇商品" />
    </>
  );
}

export default SubmitForm;
