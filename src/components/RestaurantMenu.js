import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } = resData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className='menu-container'>
      <h1>{name}</h1>
      <h4>{avgRating} Star</h4>
      <h4>{cuisines.join(", ")} | {costForTwoMessage}</h4>
      <h3>Menu Items</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default RestaurantMenu;