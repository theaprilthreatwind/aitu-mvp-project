export async function sendQuestion() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {});

  if (!response.ok) {
    throw new Error(`fetch error. code: ${response.status}`);
  }

  const data = await response.json();
}
