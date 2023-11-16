import { useContext } from "react";
import "./CartItems.css";
import { shopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import delete_icon from "../Assets/delete_icon.png"

const CartItems = () => {
  const { getTotalCardAmount,all_product, cardItems, removeFromCard } = useContext(shopContext);
  return (
    <div className="cartItems">
      <div className="cartItem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (cardItems[e.id] > 0) {
            return (
              <div>
                  <div className="cart-item-format cartItem-format-main">
                    <img
                      src={e.image}
                      alt="not found"
                      className="cartItem-product-item"
                    />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cart-item-quantity">
                      {cardItems[e.id]}
                    </button>
                    <p>${e.new_price * cardItems[e.id]}</p>
                    <img
                      className="cartItem-remove-icon"
                      src={delete_icon}
                      alt=""
                      onClick={() => {
                        removeFromCard(e.id);
                      }}
                    />
                  </div>
                  <hr/>
              </div>
            );
          }
          return null;
        })}
        <div className="cartItems-down">
            <div className="cartItems-total">
                <h1>
                    Cart totals
                </h1>
                <div>
                    <div className="cartItems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCardAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
                <button>
                    PROCEED TO CHECKOUT
                </button>
            </div>
            <div className="cartItems-promo-code">
                <p>Enter promo code</p>
                <div className="cartItem-promo-box">
                    <input type="text" placeholder="Promo code" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
