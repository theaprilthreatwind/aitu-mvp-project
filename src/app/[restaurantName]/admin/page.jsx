import { AdminMenu, SideBar } from "@/widgets";

export default function AdminPanel() {
  return (
    <div className="flex max-w-screen">
      <SideBar />
      <AdminMenu />
    </div>
  );
}
