export async function sendIncomingVisitor(restaurantName) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${restaurantName}/view`,
    {
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error(
      `Error during sending nev visitor. Code ${response.status}`,
    );
  }
  const text = await response.text();
  console.log(text)
  return response.ok;
}
