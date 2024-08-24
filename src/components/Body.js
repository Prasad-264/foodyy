import { swiggyData } from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const resData = swiggyData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(resData);

  const handleFilter = () => {
    const filterenRestaurests = topRatedRestaurants.filter((res) => res?.info?.avgRating >= 4.5);
    console.log(filterenRestaurests);    
    setTopRatedRestaurants(filterenRestaurests);
  }

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRatedRestaurants.map((data) => (
          <RestaurantCard
            key={data.info.id}
            name={data.info.name}
            imgId={data.info.cloudinaryImageId}
            cuisines={data.info.cuisines}
            rating={data.info.avgRating}
            cost={data.info.costForTwo}
            time={data.info.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;