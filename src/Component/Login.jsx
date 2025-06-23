import {
  sendPasswordResetEmail,
  // signInWithEmailAndPassword,
} from "firebase/auth";
import React, { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { auth } from "../Authentication/firebase.init";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const { signInUser } = use(AuthContext);
  // handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // UserLogin Check
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "User Logged In Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
    navigate("/");
  };
  // handle forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email).then(() => {
      Swal.fire({
        icon: "success",
        title: "Reset Password sent to you email. ",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };
  return (
    <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Username
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            id="email"
            autoComplete="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute mt-3.5 -ml-8 "
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a
              onClick={handleForgetPassword}
              rel="noopener noreferrer"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center cursor-pointer rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Login
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <Link to="/register" className="underline dark:text-gray-800">
          Register
        </Link>
      </p>
      {/* {errorMessage && // SweetAlert2
        Swal.fire({
          icon: "error",
          title: "error man ",
          showConfirmButton: false,
          timer: 1500,
        })} */}
    </div>
  );
};

export default Login;
