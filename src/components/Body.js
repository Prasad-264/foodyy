import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterenRestaurests, setFilterenRestaurests] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4749252&lng=73.9374517&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterenRestaurests(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = () => {
    const filterenRes = restaurants.filter(
      (res) => res?.info?.avgRating >= 4.5
    );
    setFilterenRestaurests(filterenRes);
  };

  const handleSearch = () => {
    const filterenRes = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterenRestaurests(filterenRes);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterenRestaurests && filterenRestaurests.map((data) => (
          <Link 
            key={data.info.id} 
            to={"/restaurant/" + data.info.id}
            className="restaurant-link"
          >
            <RestaurantCard
              name={data.info.name}
              imgId={data.info.cloudinaryImageId}
              cuisines={data.info.cuisines}
              rating={data.info.avgRating}
              cost={data.info.costForTwo}
              time={data.info.sla.deliveryTime}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
