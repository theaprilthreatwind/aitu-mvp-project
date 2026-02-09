"use client";

import { useEffect, useState } from "react";
import { ProductUI } from "@/entities";
import { Popover } from "react-tiny-popover";
import { fetchGetMenu, GenerateId, UXButton, UXInput } from "@/shared";
import { NewProductCard } from "@/features";
import { fetchNewCategory } from "./api/fetch-new-category";
import { RxCross1 } from "react-icons/rx";
import { fetchDeleteDish } from "./api/fetch-delete-dish";
import QRCode from "react-qr-code";

export function AdminMenu({ restaurantName }) {
  const [menu, setMenu] = useState(null);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [shouldFetchMenu, setShouldFetchMenu] = useState(true);

  useEffect(() => {
    try {
      if (shouldFetchMenu) {
        (async () => {
          const response = await fetchGetMenu(restaurantName);
          setMenu(response);
          setShouldFetchMenu(false);
        })();
      }
    } catch (error) {
      console.error(error.message);
      setMenu(null);
    }
  }, [shouldFetchMenu]);

  async function submitNewCategory(formData) {
    try {
      formData.preventDefault;
      setIsAddCategoryOpen(false);
      const title = formData.get("title");
      const description = formData.get("description");
      const token = sessionStorage.getItem("mangerAuthToken");
      const categoryId = GenerateId(10000000, 99999999);
      const dishes = [];
      console.log({ categoryId, title, description, dishes, token });
      const response = await fetchNewCategory(
        categoryId,
        title,
        description,
        dishes,
        token,
      );
      setShouldFetchMenu(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function handleDeleteDish(id) {
    const token = sessionStorage.getItem("mangerAuthToken");
    const response = await fetchDeleteDish(id, token);
    setShouldFetchMenu(true);
  }
  return (
    <main className="w-8/9 h-screen overflow-y-scroll">
      <header className="flex px-6 items-center shadow-md w-full h-15 border-b border-neutral-200 z-20">
        <div className="">Menu Managament</div>
      </header>
      <section className="px-6 mt-4 flex flex-row justify-end">
        <Popover
          isOpen={isAddCategoryOpen}
          onClickOutside={() => setIsAddCategoryOpen(false)}
          content={() => (
            <div className="shadow-xl px-6 py-4 rounded-2xl -z-100">
              <div className="flex flex-col">
                <form action={submitNewCategory}>
                  <div className="flex flex-col">
                    <label className="text-2xl font-bold mb-2 ">
                      Name of Category
                    </label>
                    <UXInput type="text" name="title" />
                    <label className="text-2xl font-bold mb-2 ">
                      Description
                    </label>
                    <UXInput type="text" name="description" />
                  </div>
                  <div className="flex mt-4 justify-between gap-4">
                    <UXButton size="medium" color="red" type="submit">
                      New category
                    </UXButton>
                    <UXButton
                      type="button"
                      size="medium"
                      color="sky"
                      onClick={() => {
                        setIsAddCategoryOpen((prev) => false);
                      }}
                    >
                      exit
                    </UXButton>
                  </div>
                </form>
              </div>
            </div>
          )}
          positions={["left"]}
          padding={10}
        >
          <UXButton
            type="button"
            size="medium"
            color="sky"
            onClick={() => {
              setIsAddCategoryOpen((prev) => !prev);
            }}
          >
            Add new Category
          </UXButton>
        </Popover>
      </section>
      <section className="pl-4 mt-4 overflow-hidden box-border">
        {menu &&
          menu.map((category) => {
            return (
              <div className="mt-4" key={category.id}>
                <div className="text-4xl font-bold">{category.title}</div>
                <div className="overflow-x-scroll flex gap-2 py-4">
                  {category.dishes.map((dish, productIndex) => {
                    return (
                      <ProductUI
                        name={dish.title}
                        description={dish.description}
                        price={dish.price}
                        key={productIndex}
                        photoUrl={dish.photoUrl}
                        className={"relative mr-5"}
                      >
                        <div>
                          <div className="flex justify-between">
                            <UXButton
                              variant="primary"
                              size="small"
                              color="sky"
                            >
                              Изменить
                            </UXButton>
                            <UXButton
                              variant="primary"
                              size="small"
                              color="red"
                              onClick={() => handleDeleteDish(dish.id)}
                            >
                              Удалить
                            </UXButton>
                          </div>
                        </div>
                      </ProductUI>
                    );
                  })}
                  <NewProductCard
                    categoryId={category.id}
                    setShouldFetchMenu={setShouldFetchMenu}
                  />
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
}
