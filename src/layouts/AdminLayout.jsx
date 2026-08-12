import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/sidebar/AdminSidebar";
import AdminHeader from "../components/admin/header/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <AdminSidebar />

      <main className="min-w-0 flex-1">
        <AdminHeader />

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
