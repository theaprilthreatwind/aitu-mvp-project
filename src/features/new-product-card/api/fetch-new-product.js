
export async function fetchNewProduct(
  categoryId,
  name,
  description,
  price,
  photo
) {
  const response = await fetch(process.env.API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ categoryId, name, description, price, photo }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создания нового блюда");
  }

  const data = await response.json();
  return data;
}
