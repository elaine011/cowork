type PropsType = {
  title: string;
  images: string[];
};

function RecommendOutfit({ title, images }: PropsType) {
  return (
    <div className="mb-[40px]">
      <h3 className="mb-[14px] font-normal">{title}</h3>
      <ul className="flex gap-[16px]">
        {images.map((img, index) => {
          return (
            <li
              key={index}
              className="hover:opacity-[0.6] cursor-pointer overflow-hidden transition-all duration-300">
              <img
                src={img}
                alt="outfit"
                className="hover:scale-[1.1] w-[166px] h-[200px] object-cover"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecommendOutfit;
