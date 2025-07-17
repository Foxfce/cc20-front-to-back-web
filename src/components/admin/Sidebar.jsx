import { UsersRound, Gauge } from 'lucide-react';
import { Link } from 'react-router';
import { sidebarLink } from '../../utils/links';
import useAuthStore from '../../stores/authStore';

function Sidebar() {
  const user = useAuthStore((state)=> state.user);
  const firstName = user.name.split(' ')[0]
  
  return (
    <div className="w-48 bg-[#385c89] text-white">
      {/* Profile */}
      <div className='flex flex-col justify-center items-center pt-6'>
        <UsersRound size={48} />
        <p>Welcome {user && firstName}</p>
      </div>

      {/* Navlink */}
      {
        sidebarLink.map((item) => {
          return (<Link
            key={item.label}
            to={item.link}
            className='text-white flex gap-2 items-center px-4 mt-2 hover:bg-gray-800'
            >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </Link>)
        })
      }

    </div>
  )
}
export default Sidebar