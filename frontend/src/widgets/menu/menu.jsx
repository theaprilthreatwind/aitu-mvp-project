"use client";
import { ProductCard } from "@/entities";
import { LoginForm, RegistrationForm } from "@/features";
import { Modal, UXButton } from "@/shared";
import { useState } from "react";
import { RegistrationMenu } from "..";

export function Menu({ menu }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState(null);

  async function submitOrder(id) {
    try {
      const token = sessionStorage.getItem("clientAuthToken");
      if (!token) {
        setIsAuthModalOpen(true);
        return;
      }
      const response = await fetchMakeOrder(token, id);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <section className="max-w-383 mx-auto p-4 shadow-2xl rounded-2xl">
      {isAuthModalOpen && (
        <Modal onClose={() => setIsAuthModalOpen(false)}>
          <div className="flex justify-center gap-4 flex-col items-center">
            <div className="text-2xl">Please, authorize:</div>
            <div className="gap-2 flex items-center">
              {authType === "logIn" && (
                <div className="flex flex-col justify-center">
                  <div className="text-3xl mb-2">Please, logIn</div>
                  <LoginForm />
                </div>
              )}
              {authType === "singIn" && (
                <div className="flex flex-col justify-center">
                  <div className="text-3xl mb-2">Please, singIn</div>
                  <RegistrationForm role={"CLIENT"} />
                </div>
              )}
              {authType === null && (
                <>
                  <UXButton
                    size="medium"
                    variant="primary"
                    color="sky"
                    onClick={() => setAuthType("logIn")}
                  >
                    logIn
                  </UXButton>
                  <div className="text-2xl">Or...</div>
                  <UXButton
                    size="medium"
                    variant="secondary"
                    color="sky"
                    onClick={() => {
                      setAuthType("singIn");
                    }}
                  >
                    singIn
                  </UXButton>
                </>
              )}
            </div>
          </div>
        </Modal>
      )}
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
                  <UXButton
                    size="small"
                    color="red"
                    onClick={() => submitOrder(dish.id)}
                  >
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
