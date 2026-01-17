export async function fetchOrder(id, tableNumber, token) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/client/order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        Token: token,
      },
      body: JSON.stringify({ dishIds: [id], tableNumber }),
    },
  );

  const data = await response.json();
  return data;
}
