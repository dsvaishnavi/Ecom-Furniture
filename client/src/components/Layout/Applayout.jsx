// Layout.jsx (or your root layout component)
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Applayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-0 w-full ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
