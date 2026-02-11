"use client";

import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { PopoverFormUI } from "./popover-form-ui";
import { useUploadThing } from "@/shared";
import { createNewProduct } from "../api/create-new-product.js";

export function CreateNewProductUI({ categoryId, setShouldFetchMenu }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { startUpload, isUploading } = useUploadThing("imageUploader");

  async function hanldeSubmitNewProduct(formData) {
    setIsPopoverOpen(false);
    console.log("hello")
    const title = formData.get("dishName");
    const description = formData.get("description");
    const price = formData.get("price");
    const photo = formData.get("photo");
    const token = sessionStorage.getItem("mangerAuthToken");
    const uploadRes = await startUpload([photo]);
    const photoUrl = uploadRes[0].ufsUrl;

    console.log({ categoryId, title, description, price, photoUrl, token });
    const response = await createNewProduct(
      categoryId,
      title,
      description,
      price,
      photoUrl,
      token,
    );
    console.log(response);
    setShouldFetchMenu(true);
  }
  return (
    <div>
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        positions={["right", "buttom"]}
        content={<PopoverFormUI onSubmit={hanldeSubmitNewProduct} />}
      >
        <div className="flex flex-col justify-end h-46 items-center">
          <button
            className="bg-sky-500 px-4 py-3 text-white text-xl font-bold rounded-2xl"
            onClick={() => setIsPopoverOpen((prev) => !prev)}
          >
            Add new dish
          </button>
        </div>
      </Popover>
    </div>
  );
}
