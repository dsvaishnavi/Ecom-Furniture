import { useState } from "react";
import { handleerror, handlesuccess } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";

export const Verify_Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [verify, setVerify] = useState({
    email: location.state?.email || "",
    otp: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setVerify({ ...verify, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, otp } = verify;
    if (!email || !otp) {
      handleerror("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verify),
      });

      const data = await response.json();
      const { success, message, jwtToken, error } = data;

      if (success) {
        handlesuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", email);

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        handleerror(error || "Invalid OTP or OTP expired");
      }
    } catch (err) {
      handleerror("Server Error: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5e8d0] w-full">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-md my-20">
        <div className="flex items-center justify-center mb-6">
          <img src="./1.png" alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
          <h1 className="text-3xl font-bold text-[#917337]">UrbanNest</h1>
        </div>
        <p className="text-lg text-gray-700 text-center mb-6">Email OTP Verification</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={verify.email}
              onChange={handleInput}
              className="bg-gray-100 cursor-not-allowed shadow border rounded w-full py-2 px-3 text-gray-700"
              readOnly
            />
          </div>

          <div className="mb-6">
            <label htmlFor="otp" className="block text-gray-700 text-sm font-semibold mb-2">
              One Time Password (OTP)
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={verify.otp}
              onChange={handleInput}
              placeholder="Enter the 6-digit OTP"
              maxLength="6"
              className="otp-box tracking-widest text-xl text-center font-bold shadow border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-b from-amber-900 to-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};