import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrums/BreadCrum";
import ProductInfos from "../Components/ProductInfos/ProductInfos";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {

  const {all_product} = useContext(shopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
  <div>
    <BreadCrum product={product}/>
    <ProductInfos product={product}/>
    <DescriptionBox/>
  </div>
  );
};

export default Product;
