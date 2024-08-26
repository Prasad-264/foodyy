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

export default RestaurantCard;