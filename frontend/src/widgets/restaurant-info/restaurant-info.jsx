export function RestaurantInfo({ restaurantName }) {
  return (
    <section className="max-w-375 max-h-100 mx-auto my-10">
      <div className="flex flex-col items-center">
        <div className="text-6xl">
          <span className="text-bold"> {restaurantName}'s </span>
          <span className="font-extralight">Menu</span>
        </div>
      </div>
    </section>
  );
}
