"use client";

import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Popover } from "react-tiny-popover";
import { UXButton, UXInput } from "@/shared";
import { fetchNewProduct } from "./api/fetch-new-product.js";
import { useUploadThing } from "@/shared";
export function NewProductCard({ categoryId, setShouldFetchMenu }) {
  const [isModalOpen, setIsModalopen] = useState(false);
  const [price, setPrice] = useState(1);

  const handlePrice = (value) => {
    if (value > 100000) return;
    setPrice(value);
  };

  const { startUpload, isUploading } = useUploadThing("imageUploader");

  async function submitNewDish(formData) {
    try {
      formData.preventDefault;
      setIsModalopen(false);
      const dishName = formData.get("dishName");
      const description = formData.get("description");
      const price = Number(formData.get("price"));
      const photo = formData.get("photo");
      const token = sessionStorage.getItem("MangerauthToken")
      const uploadRes = await startUpload([photo]);
      const photoUrl = uploadRes[0].ufsUrl;
      const response = await fetchNewProduct(
        categoryId,
        dishName,
        description,
        price,
        photoUrl,
        token
      );
      console.log(response);
      setShouldFetchMenu(true)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className=" w-70 w-max-50 rounded-2xl shadow-xl text-gray-800 overflow-hidden">
        <img src="/food.jpg" alt="dish" className="h-40 w-full object-cover" />
        <Popover
          isOpen={isModalOpen}
          positions={["bottom"]}
          padding={10}
          reposition={true}
          onClickOutside={() => setIsModalopen(false)}
          content={
            <div>
              <div className="flex flex-col bg-white shadow-2xl px-4 py-6 rounded-2xl border border-gray-200 min-w-80 max-w-100">
                <form action={submitNewDish}>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label className="text-2xl font-bold mb-2 ">
                        Name of dish
                      </label>
                      <UXInput type="text" name="dishName" step="0.01" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-2xl font-bold mb-2 ">
                        description
                      </label>
                      <UXInput type="text" name="description" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-2xl font-bold mb-2">Price</label>
                      <UXInput
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => handlePrice(e.target.value)}
                      />
                      <div className="flex flex-col">
                        <label className="text-2xl font-bold mb-2 ">
                          Photo
                        </label>
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
              </div>
            </div>
          }
        >
          <div
            className="px-4 py-2 flex flex-col justify-center items-center text-7xl text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition"
            onClick={() => setIsModalopen(true)}
          >
            <BsPlusCircle />
            <div className="text-xl">добавить блюдо</div>
          </div>
        </Popover>
      </div>
    </div>
  );
}

// <Modal isOpen={isAddCategoryOpen} contentLabel="category" className="">
//   <div>
//     <div className="flex flex-col">
//       <form action="sumbitDish">
//         <div className="flex flex-col">
//           <label className="text-2xl font-bold mb-2 ">Name of Category</label>
//           <UXInput type="text" />
//         </div>
//         <div className="flex mt-4 justify-between">
//           <UXButton size="medium" color="red">
//             New category
//           </UXButton>
//           <UXButton
//             type="button"
//             size="small"
//             color="sky"
//             onClick={() => {
//               setIsModalopen(false);
//             }}
//           >
//             exit
//           </UXButton>
//         </div>
//       </form>
//     </div>
//   </div>
// </Modal>;
