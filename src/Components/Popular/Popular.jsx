import products from "../Assets/data";
import Item from "../Item/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h1>In high demand</h1>
      <hr />
      <div className="popular-items">
        {products.map((product, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
