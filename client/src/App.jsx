import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { Shop } from "./pages/Shop";
import { Applayout } from "./components/Layout/Applayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout></Applayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>;
      
    </>
  );
};

export default App;
