export const Signup = () => {   
    return (
     
        <div className="flex flex-col items-center justify-center h-200 bg-[#f5e8d0] w-full ">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mb-20 mt-20">
            <div className="flex items-center justify-center mb-8">
                <img
                    src="./1.png"
                    alt="Logo"
                    className="h-20 w-20 mr-2 rounded-full"
                />
                    <h1 className="text-4xl font-bold text-[#917337]">UrbanNest</h1>
                </div>
                <h1 className="text-4xl font-bold text-center mt-10">Welcome Back!</h1>
                <p className="text-lg text-gray-600 text-center mt-2 mb-6">
                    Create account to continue.
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your mobile number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter your address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter your city"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">  
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            placeholder="Enter your state"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                            Zip Code
                        </label>
                        <input
                            type="text"
                            id="zip"
                            placeholder="Enter your zip code"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            placeholder="Enter your country"
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
                            type="button"
                        >
                            SignUp
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 text-xs mt-4">
                    &copy;2023 UrbanNest. All rights reserved.
                </p>
                <p className="text-center text-gray-600 text-xs mt-4">
                    Already have an account?{" "}
                    <a href="/SignIn"  className="text-[#917337] font-bold hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
       </div>
    );
    }    