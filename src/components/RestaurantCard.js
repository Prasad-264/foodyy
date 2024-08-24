import { RES_LOGO } from "../utils/constants";

const RestaurantCard = ({ name, imgId, cuisines, rating, cost, time }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_LOGO + imgId}
        alt="food"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{rating} Star</p>
      <p>{cost}</p>
      <p>{time} minutes</p>
    </div>
  );
};

export default RestaurantCard;