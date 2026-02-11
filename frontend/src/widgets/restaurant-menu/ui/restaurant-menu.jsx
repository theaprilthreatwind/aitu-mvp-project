"use client";

import { ProductUI } from "@/entities";
import { OrderProductUI } from "@/features";
import { ProductLayout } from "@/shared";

export function RestaurantMenu({ restaurantMenu }) {
  return (
    <section className="max-w-383 mx-auto p-4 shadow-2xl rounded-2xl">
      {restaurantMenu.map((categoryElement, index) => (
        <div key={index}>
          <div className="text-6xl">{categoryElement.title}</div>
          <div className="text-2xl font-extralight">
            {categoryElement.description}
          </div>
          <div className="flex overflow-x-scroll p-5 gap-4 min-h-80 border border-gray-200 rounded-2xl">
            {categoryElement.products.map((productElement, index) => (
              <ProductLayout key={index} photoUrl={productElement.photoUrl}>
                <ProductUI
                  categoryId={productElement.categoryId}
                  title={productElement.title}
                  description={productElement.description}
                  price={productElement.price}
                  photoUrl={productElement.photoUrl}
                  productId={productElement.productId}
                >
                  <OrderProductUI productId={productElement.productId} />
                </ProductUI>
              </ProductLayout>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
