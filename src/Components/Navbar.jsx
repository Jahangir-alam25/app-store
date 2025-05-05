import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

// Dummy user (null = not logged in)
const user = {
  username: "john_doe",
  avatar: "https://i.pravatar.cc/100?img=3", // Sample avatar
};

const Navbar=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = !!user; // simulate login

  const navLinks = [
    { name: "Apps", path: "/apps" },
    { name: "My Profile", path: "/profile" },
  ];

  const linkClass =
    "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";

  const activeClass =
    "text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-white border-b shadow-sm px-4 py-3">
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

          {/* {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {user.username}
                </span>
              </div>
              <button className="text-sm text-red-500 hover:underline">Logout</button>
            </div>
          ) : (
            <Link to="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Login
            </Link>
          )} */}
           <Link to="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Login
            </Link>
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

          {isLoggedIn ? (
            <div className="flex items-center gap-3 px-3">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{user.username}</span>
              <button className="text-red-500 text-sm hover:underline ml-auto">
                Logout
              </button>
            </div>
          ) : (
            <button className="bg-blue-600 text-white w-full px-4 py-2 rounded text-sm">
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar
