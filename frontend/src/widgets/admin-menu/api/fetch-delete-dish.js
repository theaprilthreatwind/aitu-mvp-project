export function fetchDeleteDish(id, token) {
  const response = fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/admin/dish/" + id,
    {
      method: "DELETE",
      headers: {
        Token: token,
        "ngrok-skip-browser-warning": "69420",
      },
    },
  );
}
