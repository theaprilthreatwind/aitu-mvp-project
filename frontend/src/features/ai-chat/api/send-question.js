export async function sendQuestion() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {});

  if (!response.ok) {
    throw new Error(`Request error. code: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
