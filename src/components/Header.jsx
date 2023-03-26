import React from "react";
import { moneyFormat } from "./Helper";

function Header({ total, money }) {
  
  return (
    <>
      
       {total>0 && money-total!==0 &&(
        <div className="header">Harcayacak $ {moneyFormat(money-total)}paraniz kaldi</div>
       )}
       {total ===0 && (
        <div className="header"> harcamaq icin $ {moneyFormat(money)}  paraniz var</div>
       )}
       {money -total===0&&(
        <div className="header">
          paran bitti
        </div>
       )}
      <style jsx>{`
      .header{
        background:#eee;
        height:60px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:24px;
        letter-spacing:1px;
        font-weight:600;
      }`}</style>
    </>
  );
}

export default Header;
