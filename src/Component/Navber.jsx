import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { use } from "react";

const Navber = () => {
  const { user, singOutUser } = use(AuthContext);
  // Link ShortCut
  const links = (
    <div className="space-x-5">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-amber-600" : ""
        }
      >
        Home
      </NavLink>
      {user ? (
        <>
          {/* True */}
          <NavLink
            to="/viewProfile"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-amber-600" : ""
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-amber-600" : ""
            }
          >
            Order
          </NavLink>
        </>
      ) : (
        <>
          {/* False */}

          <NavLink
            to="login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-amber-600" : ""
            }
          >
            Login
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-amber-600" : ""
            }
          >
            Register
          </NavLink>
        </>
      )}
    </div>
  );

  // AuthProvider from user login or sign out

  const handleSignOut = () => {
    singOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* Private Name */}
          {user && (
            <p className="btn btn-ghost text-xl hidden md:flex ">
              {user.displayName}
            </p>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end items-center">
          <button className="button">
            {user ? (
              <>
                {/* <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                  title={user.displayName}
                /> */}
                <p
                  className=" btn btn-ghost cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </p>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
