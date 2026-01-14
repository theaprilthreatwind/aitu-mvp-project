export default async function Restaraunt({ params }) {
  const { restaurantName } = await params;
  console.log(restaurantName);

  return (
    <>
      <header className="flex items-center justify-between bg-white mx-auto mt-6.25 my-10 h-12 w-375 text-3xl">
        <div className="font-semibold">{restaurantName}</div>
        <nav className="grid grid-cols-2 gap-2 font-extralight">
          <button>ABOUT</button>
          <button>MENU</button>
        </nav>
        <div className="grid grid-cols-2 gap-2">
          <button>singIn</button>
          <button>logIn</button>
        </div>
      </header>
      <main className="">
        <section className="bg-red-500 w-375 max-h-100 mx-auto my-10">
          <div className="flex flex-col items-center">
            <div className="text-6xl">
              <span className="font-extralight">About</span>
              <span className="text-bold"> {restaurantName}</span>
            </div>
            <div className="text-2xl font-light">Restaurant description</div>
          </div>
        </section>
        <section className="bg-green-500 w-375 mx-auto h-200"></section>
      </main>
    </>
  );
}
