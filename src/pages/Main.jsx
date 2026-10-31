// import { Handbag } from "lucide";

import Card from "../components/card";
import { useEffect, useState } from "react";
import api from "../network/api";

import NavBar from "../components/NavBar";

function Main() {
  const [totalItemsHandBag, setTotalItemsHandBag] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products") // Ele já sabe que o início é http://localhost:3000/api
      .then((resposta) => setProducts(resposta.data.products));
  }, []);
  console.log("products: ", products);
  return (
    <div className="flex flex-col gap-3">
      <h1>Ubirajara Food</h1>

      <div id="productDiv" className=" px-3 mb-16 bg-gray-200 h-full py-3 ">
        <section className="grid grid-cols-2 md:grid-cols-3 gap-3  text-left">
          {products.length > 0 ? products.map((item) => (
           
            <Card    
              name={item.name}
              price={item.price}
              img_url={item.img_url}         
              totalItemsHandBag={totalItemsHandBag}
              setTotalItemsHandBag={setTotalItemsHandBag}
            />
          )) : <></>}
        </section>
      </div>

      <NavBar totalItemsHandBag={totalItemsHandBag} />
    </div>
  );
}

export default Main;
