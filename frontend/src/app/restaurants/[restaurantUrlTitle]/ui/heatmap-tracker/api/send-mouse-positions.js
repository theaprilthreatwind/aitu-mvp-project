export async function sendMousePositions(pointsLogs, restaurantTitle) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${restaurantTitle}/setMousePoints`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pointsLogs),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Error during sendings mousePositions. Code ${response.status}`,
    );
  }
}
