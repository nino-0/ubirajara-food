import { useEffect, useState } from "react";
import ListElement from "../components/ListElement";
import { useNavigate } from "react-router-dom";

function HandBag() {
  const [totalBag, setTotalBag ] = useState(0)
  const navigate = useNavigate()

  const sumBag = () =>{
    const sum_bag = products.reduce((acumulador, item) => {
      if (item.is_check === true) {
        return acumulador + item.price;
      }
      return acumulador;
    }, 0);
    setTotalBag(sum_bag)
  }

  useEffect(() => {
    sumBag()
  }, []); 
  const handleClickHome = () => {

    navigate('/main');
  };  

  const finishPurchase = () =>{
    navigate('/success');
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 onClick={()=>{
        handleClickHome()
      }}>Ubirajara Food</h1>

      <div id="productDiv" className=" px-3 mb-16 bg-gray-100 h-screen py-3 ">
        <section className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200">
          
          {products.map((item) => (
            <ListElement name={item.name} price={item.price.toFixed(2)} is_check={item.is_check} />
          ))}
        </section>
      </div>

      <section className=" fixed bottom-0 left-0 w-full flex flex-row justify-around items-center py-4 px-4 h-16 bg-black">
        <span className="basis-1/3 text-left font-bold  text-white">
          R$ {totalBag.toFixed(2)}
        </span>
        <button onClick={finishPurchase} className="flex flex-row items-center justify-center bg-green-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-blue-500 rounded basis-2/3">
          <span>Finalizar</span>
        </button>
      </section>
    </div>
  );
}
export default HandBag;

const products = [
  {
    name: "Doce de Caju",
    price: 15.90,
    description:
      "Doce tradicional de caju em calda, caseiro e com sabor marcante.",
    estoque_num: 25,
    img_url: "https://exemplo.com/imagens/doce-de-caju.jpg",
    is_check: true,
  },
  {
    name: "Doce de Banana",
    price: 12.50,
    description:
      "Doce de banana pastoso, feito com bananas selecionadas e sem adição de conservantes artificiais.",
    estoque_num: 30,
    img_url: "https://exemplo.com/imagens/doce-de-banana.jpg",
    is_check: true,
  },
  {
    name: "Doce de Leite",
    price: 18.00,
    description: "Doce de leite cremoso tradicional, derrete na boca.",
    estoque_num: 40,
    img_url: "https://exemplo.com/imagens/doce-de-leite.jpg",
    is_check: false,
  },
  {
    name: "Torta Trufada",
    price: 45.00,
    description:
      "Fatia de torta trufada de chocolate com recheio cremoso e cobertura de ganache.",
    estoque_num: 10,
    img_url: "https://exemplo.com/imagens/torta-trufada.jpg",
    is_check: false,
  },
  {
    name: "Salada de Frutas",
    price: 10.00,
    description:
      "Mix de frutas frescas da estação cortadas, acompanhadas de suco natural de laranja.",
    estoque_num: 15,
    img_url: "https://exemplo.com/imagens/salada-de-frutas.jpg",
    is_check: false,
  },
  {
    name: "Bolo de Pote",
    price: 9.90,
    description:
      "Bolo de pote sabor prestígio, com massa fofinha e muito recheio.",
    estoque_num: 20,
    img_url: "https://exemplo.com/imagens/bolo-de-pote.jpg",
    is_check: false,
  },
  {
    name: "Geladinho Gourmet",
    price: 6.00,
    description:
      "Geladinho gourmet de Ninho com Nutella, cremoso e refrescante.",
    estoque_num: 50,
    img_url: "https://exemplo.com/imagens/geladinho-gourmet.jpg",
    is_check: true,
  },
];
