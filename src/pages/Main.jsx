// import { Handbag } from "lucide";

import Card from "../components/card";
import { useEffect, useState } from "react";
import api from "../network/api";

import NavBar from "../components/NavBar";
import { useCart } from "../contexts/CartContext";

function Main() {
  const [products, setProducts] = useState([]);
  const { addToCart,totalItems } = useCart();

  useEffect(() => {
    api
      .get("/products") // Ele já sabe que o início é http://localhost:3000/api
      .then((resposta) => setProducts(resposta.data.products));
  }, []);

  const  putOnCart = (id,amount) => {

    const item = products.reduce((acc, cur) => {
      if(cur.id === id){
        return cur
      }
      return acc;
    }, {});

    addToCart({...item,total:amount,is_check: true})

    
  }
  
  return (
    <div className="flex flex-col gap-3">
      <h1>Ubirajara Food</h1>

      <div id="productDiv" className=" px-3 mb-16 bg-gray-200 h-full py-3 ">
        <section className="grid grid-cols-2 md:grid-cols-3 gap-3  text-left">
          {products.length > 0 ? products.map((item) => (
           
            <Card
              id={item.id}    
              name={item.name}
              price={item.price}
              img_url={item.img_url}         
              putOnCart={putOnCart}
            />
          )) : <></>}
        </section>
      </div>

      <NavBar totalItemsHandBag={totalItems} />
    </div>
  );
}

export default Main;
