import { RES_LOGO } from "../utils/constants";

const RestaurantCard = ({ name, imgId, cuisines, rating, cost, time, areaName }) => {
  const cuisinesText = cuisines.join(", ");
  const truncatedCuisines = cuisinesText.length > 24 ? cuisinesText.slice(0, 24) + "..." : cuisinesText;
  return (
    <div className="p-2 m-2 w-[230px] bg-gray-200 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-shadow duration-200 flex flex-col justify-between min-h-[350px]">
      <img
        className="w-full h-36 object-cover rounded-t-lg"
        src={RES_LOGO + imgId}
        alt="food"
      />
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-md text-gray-600 ">{truncatedCuisines}</p>  
      <p className="text-md text-gray-800">★ {rating} | {time}</p>      
      <p className="text-md text-gray-800">{cost}</p>
      <p className="text-md text-gray-800">{areaName}</p>
    </div>
  );
};

// higher order function -> takes component as a 
// input and returns modified component as output

export const withVegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-green-700 font-semibold text-sm bg-teal-100 p-1 rounded-md m-1">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;