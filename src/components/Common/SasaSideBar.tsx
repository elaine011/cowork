import ArrowDwonIcon from "../../images/productDetail/arrow_down.png";

function SasaSideBar() {
  const sideBarData = [
    { title: "全站商品" },
    { title: "人氣商品推薦" },
    { title: "最新活動" },
    {
      title: "9月限時活動",
      items: [
        "【獨家限時9折】",
        "【限量10000件】",
        "【本月限定】",
        "【買一送一】",
      ],
    },
    {
      title: "本月主題推薦",
      items: ["【SASA聯名同款】", "【91APP X SASA】"],
    },
    {
      title: "流行女鞋",
      items: ["【韓國經典帆布鞋】", "【日系涼鞋】"],
    },
    {
      title: "手工婚鞋",
      items: ["【NO.1手工婚鞋】"],
    },
    {
      title: "包包系列",
      items: ["【托特包】", "【手拿包】", "【水桶包】", "【半月包】"],
    },
    {
      title: "獨家聯名",
      items: [
        "【NO.1冠軍小白鞋家族】",
        "【Kitty獨家聯名鞋款】",
        "【美樂蒂獨家聯名鞋款】",
        "【美腿製造機涼鞋】",
      ],
    },
    {
      title: "貼心鞋材",
      items: ["【皮革】", "【氣墊】"],
    },
    {
      title: "選款式",
      items: ["【小白鞋】", "【獨家聯名鞋】", "【涼鞋】", "【拖鞋】"],
    },
  ];

  return (
    <div className="text-thirdGray w-[265px]">
      {sideBarData.map((item, index) =>
        item.items ? (
          <details key={index}>
            <summary className="mb-3 list-none flex items-center cursor-pointer">
              {item.title}
              <div className="w-[16px] h-[16px] grid place-items-center mr-[10px]">
                <img src={ArrowDwonIcon} alt="arrowDownIcon" />
              </div>
            </summary>
            <div className="cursor-pointer flex flex-col ml-[18px]">
              {item.items.map((item, index) => (
                <div
                  className="mb-3 hover:text-[#333333] hover:underline"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </details>
        ) : (
          <div className="mb-3" key={index}>
            {item.title}
          </div>
        )
      )}
    </div>
  );
}
export default SasaSideBar;
