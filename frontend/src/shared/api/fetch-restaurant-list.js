export async function fetchRestaurantList() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/restaurants",
      {
        method: "GET",
      },
    );

    if (!response.ok) return [];

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
