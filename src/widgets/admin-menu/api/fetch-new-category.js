export async function fetchNewCategory(categoryId, title, description, dishes, token) {
  {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/admin/category",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: token,
          "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({ categoryId, title, description, dishes }),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка при создания нового блюда");
    }

    const data = await response.json();
    return data;
  }
}
