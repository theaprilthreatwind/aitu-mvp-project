export async function fetchGetMenu(restaurantName) {
  const categories = await fetchCategories(restaurantName);
  if (!categories) return null;
  for (const category of categories) {
    const categoryDish = await fetchCategoryDishes(category.id);
    category.dishes = categoryDish;
  }

  return categories;
}

// __________________________________________________________________
async function fetchCategoryDishes(id) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/categories/${id}/dishes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );
  const data = await response.json();
  return data;
}

async function fetchCategories(restaurantName) {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/menu/" + restaurantName;
  console.log(url);
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/menu/" + restaurantName,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    }
  );
  if (response.headers.get("content-type") == "text/html") {
    const data = await response.text();
    console.log(data);
    return null;
  }
  const data = await response.json();
  return data;
}
