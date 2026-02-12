export async function getAvailableRestaurants() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/restaurants",
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`Error during fetch. Code ${response.status}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    return [];
  }
}
