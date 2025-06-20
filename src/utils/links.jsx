import { Gauge, UserCog } from "lucide-react";

export const sidebarLink = [
  { label: "Dashboard" , link:"/admin", icon: <Gauge /> },
  { label: "Manage Users" , link:"/admin/manage", icon: <UserCog /> },
]