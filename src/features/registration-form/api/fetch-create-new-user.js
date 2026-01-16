export async function fetchCreateNewUser(name, email, password) {
  console.log(name, email, password);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role: "MANAGER" }),
    }
  );

  if (response.status === 404)
    if (!response.ok) {
      throw new Error("Ошибка при создания нового блюда");
    }

  const data = response;
  return data;
}
