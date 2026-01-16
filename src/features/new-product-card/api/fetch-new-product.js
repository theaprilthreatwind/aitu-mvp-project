export async function fetchNewProduct(
  categoryId,
  title,
  description,
  price,
  photo
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/admin/dish",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryId,
        title,
        description,
        price,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FRCMMXA%2Forange-tropical-fish-from-the-indian-ocean-pseudanthias-isolated-photo-on-white-background-website-about-nature-aquarium-fish-life-in-the-ocean-RCMMXA.jpg&f=1&nofb=1&ipt=901472dc26a0e9d2cd8e1ce10d1882fd31fe9102006e61d1a8795eed7daaf1db",
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при создания нового блюда");
  }

  const data = await response.json();
  return data;
}
