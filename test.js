async function fetchLoginUser() {
  const response = await fetch(
    "https://unnegotiated-apocalyptically-paulette.ngrok-free.dev" +
      "/api/restaurants",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении названии");
  }

  const data = await response.json();
  return data;
}

console.log(await fetchLoginUser());
