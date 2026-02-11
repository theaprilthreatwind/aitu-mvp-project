import { UXButton, UXInput } from "@/shared";

export function PopoverFormUI({ onSubmit }) {
  return (
    <form action={onSubmit} className="bg-white px-4 py-3 border border-gray-200 shadow-xl rounded-2xl">
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <label className="text-2xl font-bold mb-2 ">Name of dish</label>
          <UXInput type="text" name="dishName" step="0.01" />
        </div>
        <div className="flex flex-col">
          <label className="text-2xl font-bold mb-2 ">description</label>
          <UXInput type="text" name="description" />
        </div>
        <div className="flex flex-col">
          <label className="text-2xl font-bold mb-2">Price</label>
          <UXInput
            type="numeric"
            name="price"
          />
          <div className="flex flex-col">
            <label className="text-2xl font-bold mb-2 ">Photo</label>
            <UXInput type="file" name="photo" accept="image/*" />
          </div>
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <UXButton size="medium" color="red" type="submit">
          New dish
        </UXButton>
        <UXButton
          type="button"
          size="small"
          color="sky"
          onClick={() => {
            setIsModalopen(false);
          }}
        >
          exit
        </UXButton>
      </div>
    </form>
  );
}
