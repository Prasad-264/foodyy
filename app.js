import React from "react";
import ReactDOM from "react-dom/client";
import { swiggyData } from "./data";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="restaurent logo" />
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const RestaurantCard = ({ name, imgId, cuisines, rating, cost, time }) => {
  return (
    <div className="res-card">
      <img 
        className="res-logo" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imgId } 
        alt="food" 
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{rating} Star</p>
      <p>{cost}</p>
      <p>{time} minutes</p>
    </div>
  )
};

const Body = () => {
  const resData = swiggyData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  console.log(resData);
  
  
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((data) => (
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
  )
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>   
  )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);