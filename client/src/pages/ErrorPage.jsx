import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>no page exist.404</h1>
      <NavLink to="/">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-5 m-3
         rounded-lg shadow-md transition duration-300"
        >
          Go Home
        </button>
      </NavLink>
    </>
  );
};
