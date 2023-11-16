import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext = createContext(null);

const getDefaultCard = () => {
    let card = {};
    for (let index = 0; index < all_product.length+1; index++) {
        card[index] = 0;
    }
    return card;
}

const ShopContextProvider = (props) => {

    const [cardItems,setCardItems] = useState(getDefaultCard());
    
    
    const addToCard = (itemId) => {
        setCardItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}));
    };

    const removeFromCard = (itemId) => {
        setCardItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}));
    };

    const getTotalCardAmount = () => {
        let toTalAmount = 0;
        for(const item in cardItems) {
            if(cardItems[item]>0) {
                let itemInfo = all_product.find((product)=>{return product.id === Number(item)});
                toTalAmount+=itemInfo.new_price*cardItems[item];
            }
        }

        return toTalAmount;
    }

    const getTotalCardItems = () => {
            let totalItems = 0;
            for(const item in cardItems) {
                if(cardItems[item]>0) {
                    totalItems+=cardItems[item];
                }
            }
            return totalItems;
    }
    
    const contextValue = {getTotalCardItems,getTotalCardAmount,all_product,cardItems,addToCard,removeFromCard};
    return (
        <shopContext.Provider  value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;