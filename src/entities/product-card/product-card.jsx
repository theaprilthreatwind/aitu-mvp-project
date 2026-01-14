import { UXButton } from "@/shared";

export function ProductCard({ name, description, price, photo }) {
  return (
    <div className="">
      <div className=" w-70 w-max-50 rounded-2xl shadow-xl text-gray-800 overflow-hidden">
        <img src="/food.jpg" alt="dish" className="h-40 w-full object-cover" />
        <div className="px-4 py-2 justify">
          <div className="">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-lg text-gray-600">{description}</div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center text-xl gap-2">
              <div>{price}</div>
              <UXButton size="small" color="red">Изменить</UXButton>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
