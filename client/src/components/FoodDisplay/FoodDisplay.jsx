import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoredContext } from "../../context/StoredContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoredContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list ? (
          food_list.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>Loading food list...</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
