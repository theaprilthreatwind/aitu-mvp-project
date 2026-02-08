import { UXButton } from "@/shared";

export function ProductCard({
  name,
  description,
  price,
  photoUrl,
  children,
  className,
}) {
  return (
    <div className={className}>
      <div className="w-70 w-max-50 rounded-2xl shadow-xl text-gray-800 overflow-hidden">
        <img src={photoUrl} alt="dish" className="h-40 w-full object-cover" />
        <div className="px-4 py-2 justify">
          <div className="">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-lg text-gray-600">{description}</div>
            <div className="text-lg text-gray-600">Цена: {price} тенге</div>
          </div>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
