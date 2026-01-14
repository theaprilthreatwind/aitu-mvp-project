export async function fetchNewCategory(title, description) {
  {
    const response = await fetch(process.env.API_URL + "/api/admin/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создания нового блюда");
    }

    const data = await response.json();
    return data;
  }
}
