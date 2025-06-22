import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../Authentication/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");

    // Password validation
    const lengthRegex = /^.{6,}$/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!uppercaseRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "password at least one uppercase",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    if (!specialCharRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "password at least one special charecter",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    if (!lengthRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Password at least 6 character ",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        // verification cheack
        sendEmailVerification(auth.currentUser).then(() => {
          // SweetAlert2
          Swal.fire({
            icon: "success",
            title: "User Created Successfully. ",
            showConfirmButton: false,
            timer: 5500,
            footer: '<a href="/login">Please Login?</a>',
          });

          // Update a user's profile
          const profile = {
            displayName: name,
            photoURL: photo,
          };
          updateProfile(auth.currentUser, profile)
            .then(() => {
              console.log("user updated profile");
            })
            .catch((error) => {
              console.log(error);
              setErrorMessage(error.message);
            });
        });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const countinueWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "User Created Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm relative">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          {/* <button> */}

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            // onClick={setShowPassword(!showPassword)}
            className="absolute mt-3.5 -ml-8 "
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {/* </button> */}
        </div>
        <button className="cursor-pointer block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Register
        </button>
      </form>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Register with google accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={countinueWithGoogle}
          aria-label="Log in with Google"
          className="cursor-pointer p-3 rounded-sm"
        >
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
          </svg>
        </button>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="underline dark:text-gray-800">
          {" "}
          Login
        </Link>
      </p>
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default Register;
