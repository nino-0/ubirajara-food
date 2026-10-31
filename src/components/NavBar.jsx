import { Handbag, TableProperties } from "lucide-react";
import { useNavigate } from "react-router-dom";



function NavBar ({totalItemsHandBag }){

  const navigate = useNavigate();

  const handleClickHandBag = () => {

    navigate('/handbag');
  };  
  const handleClickProduct = () => {

    navigate('/main');
  };  
  return (
    <header className="fixed bottom-0 left-0 w-full h-16 bg-gray-900 text-white flex justify-around items-center z-50 shadow-md">
    <button 
    type="button"
    onClick={() =>handleClickHandBag()}
    className="flex-1 flex flex-col justify-center items-center h-full transition-all duration-200 active:scale-95 active:bg-gray-800 focus:outline-none"
    >
    <div className="flex-1 flex flex-col justify-center items-center  h-full cursor-pointer hover:bg-red-600 transition-colors relative">
        <Handbag />
        {
          totalItemsHandBag > 0 ? <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {totalItemsHandBag}
          </span> : <></>
        }
          
        <span className="font-medium text-sm">Sacola</span>
      </div>
    </button>
  
    <button 
    type="button"
    onClick={() => handleClickProduct()}
    className="flex-1 flex flex-col justify-center items-center h-full transition-all duration-200 active:scale-95 active:bg-gray-800 focus:outline-none"
    >
    <div className="flex-1 flex flex-col justify-center items-center h-full cursor-pointer hover:bg-green-600 transition-colors">
        <TableProperties />
        <span className="font-medium text-sm">Produtos</span>
      </div>
    </button>
  </header>
  )
}

export default NavBar;