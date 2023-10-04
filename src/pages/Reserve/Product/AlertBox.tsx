type AlertBoxPropsType = {
  showAlertBox: boolean;
  setShowAlertBox: React.Dispatch<React.SetStateAction<boolean>>;
};
function AlertBox({ showAlertBox, setShowAlertBox }: AlertBoxPropsType) {
  return (
    <>
      <div
        className={`${
          showAlertBox ? "block" : "hidden"
        } z-30 bg-[#ffffff] absolute w-[290px] h-[165px] p-[15px] shadow-[0px_2px_5px_rgba(0,0,0,0.25)] rounded-lg flex items-center flex-col justify-between`}>
        <>
          <h3 className="leading-6 font-medium">請選擇商品選項</h3>
          <p className="leading-5 text-[13px] tracking-[-0.01px]">
            送出資料錯誤，未選擇商品款式規格
          </p>
        </>
        <button
          className="bg-primaryRed text-[#ffffff] w-full px-[15px] py-3 rounded-[5px] text-[15px] leading-[15px]"
          onClick={() => setShowAlertBox(false)}>
          確認
        </button>
      </div>
      <div
        onClick={() => setShowAlertBox(false)}
        className={`${
          showAlertBox ? "block" : "hidden"
        } fixed top-0 bottom-0 left-0 right-0 z-20 bg-[rgba(0,0,0,0.5)]`}></div>
    </>
  );
}
export default AlertBox;
