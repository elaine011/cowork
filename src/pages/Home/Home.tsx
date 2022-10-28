import NavigateButton from "./NavigateButton";

function Home() {
  return (
    <>
      <h1 className='text-center text-[48px] font-medium'>請選擇想去的頁面</h1>
      <div className='flex gap-[40px] pt-5 justify-center'>
        <NavigateButton text={"點我去Sasa page"} navigateTarget={"reserve"} />
        <NavigateButton
          text={"點我去搶購頁面"}
          navigateTarget={"productDetail"}
        />
      </div>
    </>
  );
}

export default Home;
