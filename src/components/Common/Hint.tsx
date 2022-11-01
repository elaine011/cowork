type PropsType = {
  text: string;
  fontSize?: string;
};

function Hint({ text, fontSize }: PropsType) {
  return (
    <p
      className="md:text-[24px] text-[14px] text-primaryRed"
      style={fontSize ? { fontSize } : {}}
    >
      {text}
    </p>
  );
}

export default Hint;
