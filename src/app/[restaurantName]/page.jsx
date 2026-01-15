import { UXButton } from "@/shared";
import { Menu } from "@/widgets";

export default async function Restaraunt({ params }) {
  const { restaurantName } = await params;

  return (
    <>
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
          <UXButton size="medium" variant="secondary">
            singIn
          </UXButton>
          <UXButton size="medium" variant="secondary">
            logIn
          </UXButton>
        </div> */}
      </header>
      <main className="">
        <section className="max-w-375 max-h-100 mx-auto my-10">
          <div className="flex flex-col items-center">
            <div className="text-6xl">
              <span className="font-extralight">About</span>
              <span className="text-bold"> {restaurantName}</span>
            </div>
            <div className="text-2xl font-light">Restaurant description</div>
          </div>
        </section>
        <Menu />
      </main>
    </>
  );
}
