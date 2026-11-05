import ListElement from "../components/ListElement";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import NavBar from "../components/NavBar";

import { formatBR } from "../utils/formats";

function HandBag() {
  const navigate = useNavigate()
  const { cart,totalPrice,removeFromCart,updateQuantity,totalSelectItems,updateSelected,totalItems } = useCart();
  
  const handleClickHome = () => {

    navigate('/');
  };  

  const finishPurchase = () =>{
    if(totalSelectItems<1) return;
    navigate("/paymethod")
    
    
  }
  const removeCart = (item_id) => {
    removeFromCart(item_id)
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 onClick={()=>{
        handleClickHome()
      }}>Ubirajara Food</h1>

      <div id="productDiv" className=" px-3 mb-16 bg-gray-100 h-screen py-3 ">
        <section className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200">
          
          {cart.map((item) => (
            <ListElement id={item.id} name={item.name} price={item.price} total={item.total} is_check={item.is_check} img_url={item.img_url} removeFromCart={removeCart} updateQuantity={updateQuantity} updateSelected={updateSelected} />
          ))}
        </section>
      </div>

      <section className=" fixed bottom-16 left-0 w-full flex flex-row justify-around items-center py-4 px-4 h-18 bg-black">
        
        <span className="basis-1/3 text-left font-bold  text-white">
          {formatBR(totalPrice.toFixed(2),'currency')}         
        </span>
        <button onClick={finishPurchase} className="flex flex-row items-center justify-center bg-green-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-blue-500 rounded basis-2/3">
          <span>Finalizar</span>
        </button>
      </section>
      <NavBar totalItemsHandBag={totalItems} />
    </div>
  );
}
export default HandBag;


