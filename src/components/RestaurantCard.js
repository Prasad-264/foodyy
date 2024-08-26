import { RES_LOGO } from "../utils/constants";

const RestaurantCard = ({ name, imgId, cuisines, rating, cost, time }) => {
  return (
    <div className="p-2 m-2 w-[230px] bg-gray-200 rounded-md space-y-2 hover:shadow-md hover:bg-gray-300">
      <img
        className="w-full h-36 object-cover rounded-md"
        src={RES_LOGO + imgId}
        alt="food"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{rating} Star</p>
      <p>{cost}</p>
      <p>{time} minutes</p>
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