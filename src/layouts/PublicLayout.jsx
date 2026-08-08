import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/navbar/Navbar";


const PublicLayout = () => {
  return (
    <main className="min-h-screen bg-background text-text">

      <Navbar />

      <Outlet />

      

    </main>
  );
};

export default PublicLayout;