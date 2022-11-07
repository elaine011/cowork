import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

type PropsType = {
  text: string;
  navigateTarget: string;
  logoImg: string;
  bgImg: string;
};

function NavigateCard({ text, navigateTarget, logoImg, bgImg }: PropsType) {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      <div
        className="shadow-[2px_3px_5px_0px_gray] h-[360px] w-[240px] rounded-xl cursor-pointer group-hover:rotate-y-180 duration-1000 backface-hidden"
        style={{ background: `url(${bgImg}) center/cover no-repeat` }}
      ></div>
      <div className="absolute rotate-y-180 shadow-[2px_3px_5px_0px_gray] backface-hidden group-hover:rotate-y-0 opacity-0 group-hover:opacity-100 top-0 left-0 rounded-xl duration-1000 text-[24px] h-[360px] w-[240px] flex flex-col justify-center gap-[20px]">
        <img
          src={logoImg}
          alt="logoImg"
          className={`w-[120px] self-center mx-auto px-4 py-2 ${
            text === "點我去搶購頁面" ? "bg-[#df2311]" : ""
          }`}
        />
        <button
          className="mx-auto w-full"
          onClick={() => navigate(navigateTarget)}
        >
          {text}
        </button>
        <div className="animate-move self-end absolute top-[60%] right-2">
          <FontAwesomeIcon icon={faArrowPointer} />
        </div>
      </div>
    </div>
  );
}
export default NavigateCard;
