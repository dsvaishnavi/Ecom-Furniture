import { useState } from "react";
import { handleerror, handlesuccess } from "../utils";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //   handling input value
  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      // [  ] are used to make it dynamic to enter the value in field
      [name]: value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = login;
    if (!username || !email || !password) {
      return handleerror("All fields required please enter all details.");
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/signIn", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const data = await response.json();
      const { success, message, jwtToken, username, error } = data;
      if (success) {
        handlesuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", username);

        setTimeout(() => {
          navigate("/home"); //the '/ will get you to home page and /signin get you to signin page'
        }, 1000);
      } else if (error) {
        const details = error?.[0]?.message || "Something went wrong";
        handleerror(details);
      }
    } catch (err) {
      handleerror(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-200 bg-[#f5e8d0] w-full ">
      <div className="bg-white shadow-md rounded px-8 pt-8 pb-8 w-[90%] mb-20 mt-20 md:w-[50%] lg:w-[30%]">
        <div className="flex items-center justify-center mb-8">
          <img
            src="./1.png"
            alt="Logo"
            className="h-10 w-10 mr-2 rounded-full"
          />
          <h1 className="text-2xl font-bold text-[#917337] md: ">UrbanNest</h1>
        </div>
        <h1 className="text-3xl font-bold text-center mt-10 mb-6">
          Welcome Back!
        </h1>
        {/* <p className="text-lg text-gray-600 text-center mt-2 mb-6">
          Create account to continue.
        </p> */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={login.username}
              onChange={handleInput}
              name="username"
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={login.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={login.password}
              onChange={handleInput}
              name="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-b 
                            from-amber-900 
                            to-amber-600
                            text-white 
                            font-semibold 
                            px-4 
                            py-2.5 
                            rounded-lg 
                            shadow-md
                            hover:scale-105 
                            hover:shadow-lg
                            active:scale-95
                            transition-all 
                            duration-200
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-white"
              type="submit"
              onClick={handleSubmit}
            >
              SignIn
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-xs mt-4">
          &copy;2023 UrbanNest. All rights reserved.
        </p>
        <p className="text-center text-gray-600 text-xs mt-4">
          Don't have an account?{" "}
          <a
            href="/SignUp"
            className="text-[#917337] font-bold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
