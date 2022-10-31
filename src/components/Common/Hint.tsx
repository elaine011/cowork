type PropsType = {
  text: string;
};

function Hint({ text }: PropsType) {
  return <p className='md:text-[24px] text-[14px] text-primaryRed'>{text}</p>;
}

export default Hint;
