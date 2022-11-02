import React from "react";

type PropsType = {
  status: string;
  posTop?: string;
  posBottom?: string;
  posLeft?: string;
  posRight?: string;
};

function ProductLabel({
  status,
  posTop,
  posBottom,
  posLeft,
  posRight,
}: PropsType) {
  return (
    <span
      style={{ top: posTop, bottom: posBottom, left: posLeft, right: posRight }}
      className="absolute flex items-center px-3 py-1 bg-secondaryGray text-white rounded-[32px]">
      {status}
    </span>
  );
}

export default ProductLabel;
