import { SquareMinus, SquarePlus, Trash } from "lucide-react";

function ListElement({ id,name, price,total, is_check,img_url,removeFromCart,updateQuantity }) {
  
  return (
    <div className="flex flex-row gap-1  py-4 px-4 text-black bg-white">
      <input type="checkbox" className="max-w-[20px] max-h-[20px]  " checked={is_check}  />

      <img
        src={new URL(`../assets/${img_url}`, import.meta.url).href}
        alt="Imagem do doce de leite em cubos"
        className="max-w-[84px] max-h-[84px] w-full h-auto object-contain "
      />
      <div className="flex flex-col basis-full gap-2">
        <div className="flex flex-row justify-between">
          <span>
            {" "}
            {name.length > 30
              ? name.slice(0, 29) + "..."
              : name}
          </span>
          <button 
            onClick={()=>{removeFromCart(id)}}
            className=''
            aria-label="Curtir"
            >
            <Trash   />
           </button>
          
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center gap-2">
            <button 
            onClick={()=>{updateQuantity(id,total-1)}} 
            className=''
            aria-label="Curtir"
            >
            <SquareMinus />
           </button>
            <span>{total}</span>
            <button 
            onClick={()=>{updateQuantity(id,total+1)}} 
            className=''
            aria-label="Curtir"
            >
            <SquarePlus />
           </button>
          </div>
            
          <span className="font-bold text-xl ">{"R$ "+ (total*price).toFixed(2)}</span>
        </div>


      </div>
    </div>
  );
}

export default ListElement;
