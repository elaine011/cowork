import Logo from "../../images/icons/logo.png";
import { useNavigate } from "react-router-dom";

function ReserveHeader() {
  const navigate = useNavigate();
  return (
    <header className="bg-primaryRed pl-[13px] h-[57px] md:h-[82px]">
      <div
        className="max-w-[1106px] mx-auto flex items-center h-full"
        onClick={() => {
          const data = JSON.parse(
            sessionStorage.getItem("registerInfo") as string
          );
          if ("product" in data && "user" in data) {
            sessionStorage.clear();
          }
          navigate("/");
        }}>
        <img src={Logo} alt="Logo圖" className="cursor-pointer" />
      </div>
    </header>
  );
}

export default ReserveHeader;
