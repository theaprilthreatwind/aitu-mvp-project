export async function fetchRestaurantList() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/restaurants",
      {
        method: "GET",
      },
    );

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error(error.message);
    return []
  }
}
