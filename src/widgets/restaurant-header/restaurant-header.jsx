import { UXButton } from "@/shared";


export function RestaurantHeader({restaurantName}) {
  return (
    <header className="flex items-center justify-between bg-white mx-auto mt-6.25 my-10 h-12 max-w-375 text-3xl">
      <div className="font-semibold">{restaurantName}</div>
      <nav className="grid grid-cols-2 gap-2 font-extralight">
        <UXButton variant="secondary" color="sky" size="medium">
          ABOUT
        </UXButton>
        <UXButton variant="secondary" color="sky" size="medium">
          MENU
        </UXButton>
      </nav>
      {/* <div className="grid grid-cols-2 gap-2">
        {innerWidth > 768? (
                  <>
              <UXButton size="medium" variant="secondary">
                singIn
              </UXButton>
              <UXButton size="medium" variant="secondary">
                logIn
                </UXButton>
                  </> 
              )
              : null
              }
      </div> */}
    </header>
  );
}
