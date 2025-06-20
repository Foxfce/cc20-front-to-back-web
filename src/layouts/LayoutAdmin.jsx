import { Outlet } from "react-router"
import MainNav from "../components/MainNav"
import Header from "../components/admin/Header"
import Sidebar from "../components/admin/Sidebar"

function LayoutAdmin() {
  return (
    <div className="flex h-screen w-screen">
      {/* <MainNav /> */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 bg-gray-100 p-2 m-2">
          <Outlet />
        </div>
      </div>

    </div>
  )
}
export default LayoutAdmin