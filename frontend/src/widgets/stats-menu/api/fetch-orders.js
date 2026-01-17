export async function fetchOrders(token) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "GET",
    headers: {
      Token: token,
    },
  });
  const data = await response.json();
  return data
}
