import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { RES_LOGO } from "../utils/constants";
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating, cloudinaryImageId, totalRatingsString} = resData?.data?.cards[2]?.card?.card?.info;
  const categoties = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
  
  const handleShowIndex = (index) => {
    index === showIndex ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex space-x-5 my-4 items-center">
        <img className="h-20 w-20 rounded-md" src={RES_LOGO + cloudinaryImageId} alt={name} />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h4 className="text-xl font-sans">{avgRating} Star ({totalRatingsString})</h4>
        </div>
      </div>
      <h4 className="text-lg font-semibold">{cuisines.join(", ")} | {costForTwoMessage}</h4>
      {categoties.map((category, index) => (
        <RestaurantCategory 
          key={category.card?.card?.title} 
          data={category.card?.card} 
          showItems={index === showIndex}
          setShowIndex={() => handleShowIndex(index)}
        />
      ))}
    </div>
  )
};

export default RestaurantMenu;