"use client"

import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { PopoverFormUI } from "./popover-form-ui";
import { useUploadThing } from "@/shared";

export function CreateNewProductUI({ categoryId }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { startUpload, isUploading } = useUploadThing("imageUploader");

  async function hanldeSubmitNewProduct(formData) {
    setIsModalopen(false);
    const dishName = formData.get("dishName");
    const description = formData.get("description");
    const price = formData.get("price");
    const photo = formData.get("photo");
    const token = sessionStorage.getItem("mangerAuthToken");
    const uploadRes = await startUpload([photo]);
    const photoUrl = uploadRes[0].ufsUrl;
    const response = await fetchNewProduct(
      categoryId,
      dishName,
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
        content={<PopoverFormUI onSubmit={hanldeSubmitNewProduct} />}
      >
        <button onClick={() => setIsPopoverOpen((prev) => !prev)}>
          Add new dish
        </button>
      </Popover>
    </div>
  );
}
