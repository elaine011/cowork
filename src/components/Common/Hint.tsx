type PropsType = {
  text: string;
};

function Hint({ text }: PropsType) {
  return (
    <p className='md:px-0 md:text-left md:text-[24px] text-[14px] text-primaryRed text-center px-[45px]'>
      {text}
    </p>
  );
}

export default Hint;
