import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between container m-auto  shadow-lg p-5 sticky top-0 bg-white">
      <div>
        <Link>
          {" "}
          <h2 className="text-2xl font-semibold">Phone Shop</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5 text-md">
          <li>
            <NavLink to={"/"}>Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/favorites"}>Favorites</NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
