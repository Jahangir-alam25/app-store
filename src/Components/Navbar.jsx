import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";

import userIcon from "../assets/user.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const { user, logOut } = use(AuthContext);



  const handleLogOut = () => {
    console.log("user trying to LogOut");
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = [
    { name: "Apps", path: "/" },
    { name: "My Profile", path: "/profile" },
  ];

  const linkClass =
    "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";

  const activeClass =
    "underline text-blue-600 font-semibold";

  return (
    <nav className="bg-white border-b  px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <img src="https://i.ibb.co.com/1fbf4mxt/application-1.png" alt="logo" className="h-8 w-8" />
          AppStore
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  src={`${user.photoURL ? user.photoURL : userIcon}`}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </span>
              </div>
              <button onClick={handleLogOut} className="text-sm btn px-10 bg-blue-600 text-white hover:underline">Logout</button>
            </div>
          ) : (
            <Link to="/auth/login" className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-blue-700 text-sm">
              Login
            </Link>
          )}
         
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${activeClass} block` : `${linkClass} block`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <div className="flex items-center gap-3 px-3">
              <img
                src={`${user.photoURL ? user.photoURL : userIcon}`}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{user.username}</span>
              <button onClick={handleLogOut} className="text-red-500 text-sm hover:underline ml-auto">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth/login">
              <div>
                <button className="bg-blue-600 btn-block text-white  px-4 py-2 rounded text-sm">
                  Login
                </button>
              </div>
            </Link>

          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar
