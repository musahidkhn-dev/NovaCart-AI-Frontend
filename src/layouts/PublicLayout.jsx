import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/navbar/Navbar";
import Footer from "../components/navigation/Footer";

const PublicLayout = () => {
  return (
    <main className="min-h-screen bg-background text-text">

      <Navbar />

      <Outlet />

      <Footer />

    </main>
  );
};

export default PublicLayout;