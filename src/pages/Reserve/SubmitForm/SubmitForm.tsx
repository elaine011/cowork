import Header from "./Header";
import ReserveFooter from "../../../components/Footers/ReserveFooter";

function SubmitForm() {
  return (
    <>
      <main className='md:px-4 md:bg-primaryPageBackgroundGray md:h-[100vh]'>
        <Header />
        <div className='pt-[17px] bg-white md:py-[60px] max-w-[1080px] mx-auto'>
          <div className='w-[335px] mx-auto'>
            <div className='mb-[10px]'>
              <span className='text-primaryRed mr-1'>*</span>
              <label htmlFor='name'>姓名</label>
            </div>
            <input
              type='text'
              id='name'
              placeholder='輸入中文姓名，限制 2~7 個字'
              className='text-[14px] pl-[10px] border border-solid border-borderGray h-[40px] w-full rounded-[5px] mb-[15px]'
            />
            <div className='mb-[10px]'>
              <span className='text-primaryRed mr-1'>*</span>
              <label htmlFor='phone'>手機號碼 (需通過簡訊驗證)</label>
            </div>
            <div className='flex mb-[15px] gap-[5px]'>
              <select className='pl-[10px] w-[116px] border border-solid border-borderGray rounded-[5px] h-[40px] bg-[#f4f4f4] text-thirdGray'>
                <option value='+886'>+886</option>
              </select>
              <input
                type='text'
                id='phone'
                placeholder='輸入手機號碼'
                className='grow text-[14px] pl-[10px] border border-solid border-borderGray h-[40px] rounded-[5px]'
              />
            </div>

            <div className='mb-[10px]'>
              <span className='text-primaryRed mr-1'>*</span>
              <label htmlFor='email'>Email 信箱 (開賣時用此 Email 通知)</label>
            </div>
            <input
              type='text'
              id='email'
              placeholder='輸入 Email'
              className='text-[14px] pl-[10px] border border-solid border-borderGray h-[40px] w-full rounded-[5px] mb-[15px]'
            />
            <div className='flex items-center gap-[6px]'>
              <input
                type='checkbox'
                id='termsCheck'
                className='w-[16px] h-[16px]'
              />
              <label htmlFor='termsCheck'>
                我已經閱讀並同意{" "}
                <button className='text-primaryBlue hover:underline'>
                  隱私權及網站使用條款
                </button>
              </label>
            </div>
          </div>
        </div>
      </main>
      <ReserveFooter
        switchRoute='/reserve/product'
        functionButtonText='選擇商品'
      />
    </>
  );
}

export default SubmitForm;
