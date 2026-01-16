import { fetchGetMenu } from "@/shared";
import { AdminMenu, SideBar } from "@/widgets";

async function getMenu(restaurantName) {
  try {
    const menu = await fetchGetMenu(restaurantName);
    return menu;
  } catch (error) {
    console.error(error.message);
  }
}

export default async function AdminPanel(params) {
  const { restaurantName } = await params;
  const menu = await getMenu(restaurantName);
  console.log(menu)
  return (
    <div className="flex max-w-screen">
      <SideBar />
      <AdminMenu />
    </div>
  );
}
