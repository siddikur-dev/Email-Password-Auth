import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { user } = use(AuthContext);
  return (
    <div className="relative w-full h-[80vh] bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center text-white px-4">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to AuthApp</h1>
        <p className="text-lg md:text-xl">
          Register or login using your Email & Password or Google account.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          {
            <>
              {user ? (
                <Link
                  className="bg-white text-violet-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
                  to="/viewProfile"
                >
                  ViewProfile
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="bg-white text-violet-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
                >
                  Register Now
                </Link>
              )}
            </>
          }

          {
            <>
              {user ? (
                <Link
                  className="border border-white px-6 py-2 rounded hover:bg-white hover:text-violet-600 transition"
                  to="/order"
                >
                  Order
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="border border-white px-6 py-2 rounded hover:bg-white hover:text-violet-600 transition"
                >
                  Login Now
                </Link>
              )}
            </>
          }
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
