export async function fetchCreateNewUser(name, email, password, role) {
  console.log(name, email, password, role);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role}),
    }
  );
  if (!response.ok) {
    throw new Error(
      "Ошибка при создания нового блюда, CODE: " + response.status
    );
  }

  const data = response;
  return data;
}
