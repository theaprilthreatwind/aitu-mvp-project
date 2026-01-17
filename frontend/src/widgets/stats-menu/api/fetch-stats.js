export async function fetchStats(token) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/admin/stats", {
    method: "GET",
    headers: {
      Token: token,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  const data = await response.json();
  return data
}
