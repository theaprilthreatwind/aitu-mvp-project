export async function fetchCategories(cleanRestaurantUrlTitle) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/menu/" + cleanRestaurantUrlTitle,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Error during fetch. code: ${response.status}`);
    }

    if (response.headers.get("content-type") == "text/html") {
      throw new Error(`Not excepted html response.`);
    }

    const data = await response.json();
    return data;
  } catch(error) {
    return []
  }
}
