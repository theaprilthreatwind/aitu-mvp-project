export async function fetchNewProduct(
  categoryId,
  title,
  description,
  price,
  photoUrl,
  token
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/admin/dish",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Token: token },
      body: JSON.stringify({
        categoryId,
        title,
        description,
        price,
        photoUrl,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при создания нового блюда");
  }

  const data = await response.json();
  return data;
}
