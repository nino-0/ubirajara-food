import { SquareMinus, SquarePlus, Trash } from "lucide-react";
import BRLabel from "./BrLabel";

function ListElement({ id,name, price,total, is_check,img_url,removeFromCart,updateQuantity,updateSelected }) {
  const handleDelete = () => {
    // Abre a caixa de diálogo nativa do navegador
    const isConfirmed = window.confirm(
      "Tem certeza que deseja remover esse item da sacola? Essa ação não poderá ser desfeita."
    );

    if (isConfirmed) {
      console.log(`Executando exclusão do ID: ${id}`);
      removeFromCart(id)
    } else {
      // Se clicar em "Cancelar", retorna false
      console.log("Ação cancelada pelo usuário.");
    }
  };
  
  return (
    <div className="flex flex-row gap-1  py-4 px-4 text-black bg-white">
      <input type="checkbox" className="max-w-[20px] max-h-[20px]  " checked={is_check} onClick={()=>{updateSelected(id)}}  />

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
            onClick={()=>{ 
              handleDelete()
            }}
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
          <BRLabel value={(total*price).toFixed(2)} />
          {/* <span className="font-bold text-xl ">{"R$ "+ (total*price).toFixed(2)}</span> */}
        </div>


      </div>
    </div>
  );
}

export default ListElement;
