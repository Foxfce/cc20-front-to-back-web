import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/authen/Register'
import Login from '../pages/authen/Login'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import Layout from '../layouts/Layout'
import LayoutAdmin from '../layouts/LayoutAdmin'
import HomeUser from '../pages/user/HomeUser'
import ProtectRoute from './ProtectRoute'

// rfce
export default function AppRoute() {
  return (
    <Routes>
      {/* Public */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>

      <Route path='user'
        element={<ProtectRoute el={<Layout />}
          allows={['USER', 'ADMIN']} />}
      >
        <Route index element={<HomeUser />} />
      </Route>

      {/* Private */}
      {/* <Route path='admin' element={<LayoutAdmin />}> */}
      <Route
        path='admin'
        element={<ProtectRoute el={<LayoutAdmin />} allows={['ADMIN']} />}
      >
        <Route index element={<Dashboard />} />
        <Route path='manage' element={<Manage />} />
      </Route>
    </Routes>
  )
}
