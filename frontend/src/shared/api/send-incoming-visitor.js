export async function sendIncomingVisitor() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(
      `Error during sending nev visitor. Code ${response.status}`,
    );
  }

  return response.ok;
}
