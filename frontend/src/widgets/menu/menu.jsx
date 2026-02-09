"use client";
import { ProductUI } from "@/entities";
import { LoginForm, RegistrationForm } from "@/features";
import { Modal, UXButton, UXInput } from "@/shared";
import { useState } from "react";
import { RegistrationMenu } from "..";
import { fetchOrder } from "./api/fetch-order";
import { Popover } from "react-tiny-popover";
import { Toaster, toast } from "react-hot-toast";

export function Menu({ menu }) {
  console.log(menu);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [authType, setAuthType] = useState(null);

  async function submitOrder(formData, id) {
    try {
      formData.preventDefault;
      const tableName = formData.get("table");
      const token = sessionStorage.getItem("clientAuthToken");
      console.log(tableName, id, token);
      if (!token || token === "undefined") {
        setIsAuthModalOpen(true);
        return;
      }
      const response = await fetchOrder(id, tableName, token);
      console.log(response);
      toast.success("Successfully ordered");
      setIsOrderFormOpen(false);
    } catch (error) {
      toast.error("This didn't work, try later");
      console.error(error.message, error.cause);
    }
  }

  return (
    <section className="max-w-383 mx-auto p-4 shadow-2xl rounded-2xl">
      <Toaster />
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
              {category.products.map((dish, index) => (
                <ProductUI
                  name={dish.title}
                  description={dish.description}
                  price={dish.price}
                  photoUrl={dish.photoUrl}
                  key={index}
                >
                  <Popover
                    positions={["bottom"]}
                    isOpen={isOrderFormOpen}
                    reposition={true}
                    onClickOutside={() => setIsOrderFormOpen(false)}
                    content={
                      <div className="bg-white p-4 shadow-2xl border border-gray-200 rounded-2xl">
                        <form
                          action={(formData) => submitOrder(formData, dish.id)}
                          className="flex flex-col gap-2"
                        >
                          <label className="text-2xl">Write table's num</label>
                          <UXInput name="table" />
                          <UXButton
                            size="small"
                            type="number"
                            color="red"
                            variant="primary"
                          >
                            Order
                          </UXButton>
                        </form>
                      </div>
                    }
                  >
                    <UXButton
                      size="small"
                      color="red"
                      onClick={() => setIsOrderFormOpen(true)}
                      key={index}
                    >
                      Заказать
                    </UXButton>
                  </Popover>
                </ProductUI>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}
