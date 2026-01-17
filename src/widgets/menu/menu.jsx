"use client";
import { ProductCard } from "@/entities";
import { Modal, UXButton } from "@/shared";
import { useState } from "react";
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

export function Menu({ menu }) {
  const [isModalOpen, setIsModalOpen] = useState(null);

  return (
    // <div>
    //   {isModalOpen && (
    //     <Modal onClose={() => isModalOpen(false)}>
    //       <div className="flex flex-col justify-center items-center p-4">
    //         <div className="text-2xl">Войдите или зарегистрируйтесь</div>
    //         <div>
    //           <UXButton color="red" size="medium" variant="secondary">
    //             Войти
    //           </UXButton>
    //           <UXButton color="red" size="medium" variant="primary">
    //             зарегистрироваться
    //           </UXButton>
    //         </div>
    //       </div>
    //     </Modal>
    //   )}
    // </div>
    <section className="max-w-383 mx-auto p-4 shadow-2xl rounded-2xl">
      {menu &&
        menu.map((category, index) => (
          <div key={category.id}>
            <div>
              <div className="text-6xl">{category.title}</div>
              <div className="text-2xl font-extralight">
                {category.description}
              </div>
            </div>
            <div className="flex overflow-x-scroll p-5 gap-4 min-h-80 border border-gray-200 rounded-2xl">
              {category.dishes.map((dish, index) => (
                <ProductCard
                  name={dish.title}
                  description={dish.description}
                  price={dish.price}
                  photoUrl={dish.photoUrl}
                  key={index}
                >
                  <UXButton size="small" color="red">
                    Заказать
                  </UXButton>
                </ProductCard>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}
