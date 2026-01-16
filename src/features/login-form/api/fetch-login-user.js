export async function fetchLoginUser(name, password) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создания нового блюда");
  }

  const data = await response.json();
  return data;
}
