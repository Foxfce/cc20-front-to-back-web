import { Link } from "react-router";

function MainNav() {
  return (
    <div className="flex justify-between h-14 bg-[#385c89] text-white items-center px-8 py-4">
      <div className="flex gap-4">
        <Link to="/" className="font-bold">LOGO</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/">Page1</Link>
        <Link to="/">Page2</Link>
        <Link to="/">Page3</Link>
        <Link to="/">Page4</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
export default MainNav