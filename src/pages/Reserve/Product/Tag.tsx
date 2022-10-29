type TagProps = {
  text: string;
  color: string;
  isActive: boolean;
};
function Tag({ text, color, isActive }: TagProps) {
  return (
    <div className="bg-[#ffffff] inline-flex flex-wrap py-[5px] px-4 border border-solid border-[#d4d9de] rounded-[3px] mr-[10px] mt-[15px] items-center justify-center">
      <span>{text}</span>
      <span
        className="w-3 h-3 rounded-full ml-[5px]"
        style={{
          backgroundColor: `${color}`,
        }}
      ></span>
    </div>
  );
}
export default Tag;
