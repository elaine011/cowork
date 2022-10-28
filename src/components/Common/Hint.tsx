type PropsType = {
  text: string;
};

function Hint({ text }: PropsType) {
  return (
    <p className='text-[14px] text-primaryRed text-center px-[45px]'>{text}</p>
  );
}

export default Hint;
