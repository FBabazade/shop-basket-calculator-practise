import React from "react";
import BasketItem from "./BasketItem";
import { moneyFormat } from "./Helper";

function Basket({resetBasket, basket, products, total }) {

    
  return (
    <>
      {basket.map(item => (
        <BasketItem item={item} product={products.find(p=>p.id === item.id)}/>
      ))}
      <div>
        Toplam: $ {moneyFormat(total)}
      </div>
      <button onClick={resetBasket}>sifirla</button>
    </>
  );
}

export default Basket;
