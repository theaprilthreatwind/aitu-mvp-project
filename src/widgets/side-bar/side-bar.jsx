import { GrFormNext, GrMenu, GrRestaurant } from "react-icons/gr";

export function SideBar({currentTab, setCurrentTab}) {
  return (
    <aside className="bg-white shadow-md w-1/9 flex flex-col rounded-r-lg h-screen">
      <div className="p-4 border-b border-neutral-200">
        <div className="text-xl font-bold text-neutral-800 flex items-center">
          TheApril
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li className="flex items-center py-2 rounded-lg text-neutral-600 hover:bg-gray-100">
            <button 
            onClick={() => setCurrentTab("stats")}
            className="w-full flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <GrRestaurant />
                Dashboard
              </div>
              <GrFormNext />
            </button>
          </li>

          <li className="flex items-center py-2 rounded-lg text-neutral-600 hover:bg-gray-100">
            <button
              onClick={() => setCurrentTab("menu")}
              className="w-full flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <GrMenu />
                Menu
              </div>
              <GrFormNext />
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
