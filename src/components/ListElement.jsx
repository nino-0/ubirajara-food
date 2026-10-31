import { Trash } from "lucide-react";
import img2 from '../assets/img2.jpg';

function ListElement({ name, price, is_check }) {
  return (
    <div className="flex flex-row gap-1  py-4 text-black bg-white">
      <input type="checkbox" className="max-w-[20px] max-h-[20px]  " checked={is_check}  />

      <img
        src={img2}
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
          <Trash />
        </div>

        <div className="flex flex-row justify-between ">
          <select name="cores" id="cores" className="shadow-xl">
            <option value="1">1 un.</option>
            <option value="2">2 un.</option>
            <option value="3">3 un.</option>
          </select>
          <span className="font-bold text-xl ">{"R$ "+ price}</span>
        </div>
      </div>
    </div>
  );
}

export default ListElement;
