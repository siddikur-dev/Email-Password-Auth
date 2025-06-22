import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-[80vh] bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center text-white px-4">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to AuthApp</h1>
        <p className="text-lg md:text-xl">
          Register or login using your Email & Password or Google account.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/register"
            className="bg-white text-violet-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Register Now
          </a>
          <a
            href="/login"
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-violet-600 transition"
          >
            Login Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
