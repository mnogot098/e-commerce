import './Offer.css';
import exclusive from "../Assets/exclusive_image.png"
const Offer = () => {
  return (
  <div className="offers">
    <div className="offers-left">
        <h1>EXCLUSIVE OFFERS FOR YOU</h1>
        <p>Only on best seelers products</p>
        <button>CHECK NOW</button>
    </div>
    <div className="offers-right">
        <img src={exclusive} alt="" />
    </div>
  </div>);
};

export default Offer;