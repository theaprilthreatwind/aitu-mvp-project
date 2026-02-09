export async function fetchProducts(id) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/categories/${id}/dishes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Error during fetch. code: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
