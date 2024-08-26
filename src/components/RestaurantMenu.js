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
    <div className="max-w-7xl mx-auto p-4 space-y-2">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h4>{avgRating} Star</h4>
      <h4>{cuisines.join(", ")} | {costForTwoMessage}</h4>
      <h3 className='text-lg font-semibold'>Menu Items</h3>
      <ul className='list-disc pl-6'>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default RestaurantMenu;