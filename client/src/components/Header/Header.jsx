import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Dive into a world of culinary delights! Our app connects you to a vast
          selection of restaurants, each offering an enticing menu brimming with
          delectable dishes. From hand-crafted meals prepared with the freshest
          ingredients to unique flavor combinations that will tantalize your
          taste buds, explore a world of culinary adventures without ever
          leaving your couch. Order your perfect meal today!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
