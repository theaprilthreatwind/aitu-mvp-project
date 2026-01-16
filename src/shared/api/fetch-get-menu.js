export async function fetchGetMenu(restaurantName) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/menu/" + restaurantName,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении названии");
  }

  const data = await response.json();
  return data;
}
