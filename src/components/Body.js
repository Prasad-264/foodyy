import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterenRestaurests, setFilterenRestaurests] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_API);
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!! Please check your internet connection!!</h1>
  }

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-2">
      <div className="my-4 px-3 flex justify-between">
        <div className="flex space-x-3">
          <input
            type="text"
            className="border border-gray-600 rounded-md p-1 "
            value={searchText}
            placeholder="Search Restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="py-1 px-2 bg-cyan-300 rounded-md hover:bg-cyan-400" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="py-1 px-3 bg-purple-300 rounded-md hover:bg-purple-400" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterenRestaurests && filterenRestaurests.map((data) => (
          <div>
            <Link 
              key={data.info.id} 
              to={"/restaurant/" + data.info.id}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
