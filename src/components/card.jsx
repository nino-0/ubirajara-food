import { useState } from "react";
// import img1 from '../assets/img1.jpg';
import { Handbag, SquareMinus, SquarePlus } from "lucide-react";

function Card({id,totalItemsHandBag,setTotalItemsHandBag,name,price,img_url,putOnCart}) {
  const [count, setCount] = useState(0);
   const addOnBag = () => {
    setCount(count+1)
  }
  const subtractionOnBag = () => {
    if(count>0){
      setCount(count-1)
    }
    
  }
  const addToCart = ()=> {
    if(count === 0){
      return
    }
    setTotalItemsHandBag(totalItemsHandBag+count)
    setCount(0)
    putOnCart(id,count)
  }

  return (
    <div id="card" className="flex flex-col items-center gap-3  shadow-xl/20 rounded-lg  bg-white px-2 py-3  ">
        <img src={new URL(`../assets/${img_url}`, import.meta.url).href} className="max-w-[112px] max-h-[112px] w-full h-auto object-contain " alt="img" />
        <span className="self-start w-full ">{name}</span>
        <div id="priceAndAmount" className="flex flex-row justify-between  gap-4  items-center">

          <span  className="text-xl">R$ {price.toFixed(2)}</span>

          <div className="flex flex-row gap-1">
            
            <button 
            onClick={subtractionOnBag} 
            className=''
            aria-label="Curtir"
            >
            <SquareMinus />
           </button>
            <span>{count}</span>
            <button 
            onClick={addOnBag} 
            className=''
            aria-label="Curtir"
            >
            <SquarePlus />
           </button>
            
          </div>

        </div>

        <button 
        onClick={addToCart}
        className="flex flex-row items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
          <span>Adicionar</span> 
          <Handbag />
        </button>
        
      </div>
  )
}

export default Card;