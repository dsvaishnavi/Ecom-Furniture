import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-[#f5e8d0]">
      <h1 className="font-bold text-[#917337] mb-4 text-5xl">
        Oops! Something went wrong.
        Error 404
      </h1>
      <p className="text-2xl text-[#917337]">Page Not Found</p>
      <NavLink to="/home">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-5 m-3
         rounded-lg shadow-md transition duration-300"
        >
          Go Home
        </button>
      </NavLink>
      </div>
    </>
  );
};
