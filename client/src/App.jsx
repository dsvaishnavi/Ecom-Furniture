import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { Shop } from "./pages/Shop";
import { Applayout } from "./components/Layout/Applayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";

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
        path: "SignIn",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <Signup />,
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
