import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket]=useState([])
const [total,setTotal]=useState(0)

  useEffect(()=>{
   const t= basket.reduce((acc, item)=>{
      return acc+(item.amount*(products.find(product=>product.id=== item.id).price))
    },0)
    console.log(t);
  }, [basket])

  return (
    <>
      <Header money={money} />
      {products.map(product => (
        <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
      ))}
    </>
  );
}

export default App;
