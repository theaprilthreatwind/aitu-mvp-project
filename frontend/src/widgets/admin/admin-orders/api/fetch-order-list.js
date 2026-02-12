export async function fetchOrderList(token) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/admin/orders",
    {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "69420",
        Token: token,
      },
    },
  );
  if (!response.ok) {
    throw new Error(`Request error. code: ${response.status}`);
  }
  if (response.headers.get("content-type") == "text/html") {
    const data = await response.text();
    console.log(data);
    return null;
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
}
