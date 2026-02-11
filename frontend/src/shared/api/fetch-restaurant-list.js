export async function fetchRestaurantList() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/restaurants", {
    method: "GET",
  });

  const data = await response.json();
  return data;
}
