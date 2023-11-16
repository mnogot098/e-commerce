import React from "react";
import "./NewsLetter.css";

const NewsLetter = (props) => {
  return (
    <div className="newsLetter">
    <h1>
        Get exclusive offers on your email
    </h1>
    <p>
        Subscribe to our newsletter to stay updated!
    </p>
    <div>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
    </div>
    </div>
  );
};

export default NewsLetter;
