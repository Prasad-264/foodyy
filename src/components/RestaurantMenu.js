import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();  
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    try {
      const response = await fetch( MENU_API + resId);
      const data = await response.json();
      setResData(data);
      console.log(data);
    } catch (error) {
      console.error(error);      
    }
  };

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