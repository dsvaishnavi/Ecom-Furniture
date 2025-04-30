// Layout.jsx (or your root layout component)
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Home } from "../../pages/Home";

export const Applayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Add pt-[header-height] to push content down */}
      <main className=" pt-20 bg-[#f5e8d0] ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
