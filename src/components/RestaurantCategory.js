import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div className="w-full bg-gray-100 rounded-sm my-4 px-4 py-2">
      <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
        <span className="font-semibold text-lg">{data?.title} ({data?.itemCards?.length})</span>
        <span className={`transform ${showItems ? "rotate-180 duration-300" :"duration-300" }`}>▼</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
