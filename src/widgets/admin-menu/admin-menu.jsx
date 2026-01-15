"use client";

import { useState } from "react";
import { ProductCard } from "@/entities";
import { Popover } from "react-tiny-popover";
import { UXButton, UXInput } from "@/shared";
import { NewProductCard } from "@/features";
import { fetchNewCategory } from "./api/fetch-new-category";

const menuData = [
  {
    categoryId: 123,
    title: "Супы",
    description: "Номад Супы вкусные",
    dishes: [
      {
        id: 1124,
        title: "Блюдо Суп с Котом",
        description: "Освежающий супчик",
        price: 199.9,
      },
      {
        id: 12412,
        title: "Блюдо Суп с водой",
        description: "Освежающий супчик",
        price: 23.9,
      },
    ],
  },
  {
    categoryId: 124154,
    title: "чаи",
    description: "Номад чаи вкусные",
    dishes: [
      {
        id: 112134,
        title: "чай с Котом",
        description: "Освежающий чай",
        price: 10.0,
      },
      {
        id: 113151,
        title: "чай с броколями",
        description: "Освежающий чай",
        price: 13.0,
      },
      {
        id: 958328,
        title: "чай с бубенами",
        description: "Освежающий чай",
        price: 12.0,
      },
      {
        id: 112134,
        title: "чай с Котом",
        description: "Освежающий чай",
        price: 10.0,
      },
      {
        id: 113151,
        title: "чай с броколями",
        description: "Освежающий чай",
        price: 13.0,
      },
      {
        id: 958328,
        title: "чай с бубенами",
        description: "Освежающий чай",
        price: 12.0,
      },
      {
        id: 112134,
        title: "чай с Котом",
        description: "Освежающий чай",
        price: 10.0,
      },
      {
        id: 112134,
        title: "чай с Котом",
        description: "Освежающий чай",
        price: 10.0,
      },
    ],
  },
];

export function AdminMenu() {
  const [menu, setMenu] = useState(menuData);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  async function submitNewCategory(formData) {
    try {
      formData.preventDefault;
      setIsAddCategoryOpen(false);
      const title = formData.get("title");
      const description = formData.get("description");
      console.log({ title, description });
      const response = await fetchNewCategory(title, description);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <main className="w-8/9 h-screen">
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
                <form action="submitCategory">
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
        {menu.map((value) => {
          return (
            <div className="mt-4" key={value.categoryId}>
              <div className="text-4xl font-bold">{value.title}</div>
              <div className="overflow-x-scroll flex gap-2 py-4">
                {value.dishes.map((dish, productIndex) => {
                  return (
                    <ProductCard
                      name={dish.title}
                      description={dish.description}
                      price={dish.price}
                      key={productIndex}
                    >
                      <UXButton variant="primary" size="small" color="red">
                        Изменить
                      </UXButton>
                    </ProductCard>
                  );
                })}
                <NewProductCard categoryId={value.categoryId} />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
