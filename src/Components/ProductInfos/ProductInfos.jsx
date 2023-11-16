import { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import "./ProductInfos.css";
const ProductInfos = (props) => {
  const { product } = props;
  const { addToCard } = useContext(shopContext);

  return (
    <div className="productInfos">
      <div className="left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-image">
          <img src={product.image} className="main-img" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="product-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="price-old">${product.old_price}</div>
          <div className="price-new">${product.new_price}</div>
        </div>
        <div className="description">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s..
        </div>
        <div className="right-size">
          <h1>Select size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
        </div>
        <button onClick={()=>{addToCard(product.id  )}}>ADD TO CARD</button>
        <p className="category">
          <span>Category :</span>Women, T-shirt, Crop Top
        </p>
        <p className="category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductInfos;
