import { useState } from "react";

  
export const SignIn = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handle input val
  const handleinput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    alert(login);
  };

  return (
    <div className="flex flex-col items-center justify-center h-200 bg-[#f5e8d0] w-full">
      <div className="flex items-center justify-center mt-8">
        <img src="./1.png" alt="Logo" className="h-20 w-20 mr-2 rounded-full" />
        <h1 className="text-4xl font-bold  text-[#917337]">UrbanNest</h1>
      </div>
      <h1 className="text-4xl font-bold text-center mt-25">Welcome Back!</h1>
      <p className="text-lg text-gray-600 text-center mt-2 mb-6">
        Please login to your account to continue.
      </p>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            value={login.username}
            onChange={handleinput}
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
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
            value={login.email}
            onChange={handleinput}
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
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
            value={login.password}
            onChange={handleinput}
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
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
            type="button"
            onClick={handleloginSubmit}
          >
            SignIN
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-[#917337] font-bold hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-600 text-sm">
            By signing in, you agree to our{" "}
            <a href="#" className="text-[#917337] font-bold hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#917337] font-bold hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#917337] font-bold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
