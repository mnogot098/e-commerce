import React, { useContext } from "react";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { shopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./ShopCategory.css"

const ShoppingCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img className="shopCategoryBanner" src={props.banner} alt="" />
      <div className="shop-category-product">
        {all_product.map((product, index) => {
          if (props.category === product.category) {
            return (
              <Item
                key={index}
                id={product.id}
                name={product.name}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default ShoppingCategory;
