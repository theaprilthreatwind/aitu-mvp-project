export async function orderProduct(productId, table, token) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/client/order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dishIds: [productId], tableNumber: table }),
    },
  );

  if (!response.ok) {
    throw new Error(`Error during fetch. Code: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
