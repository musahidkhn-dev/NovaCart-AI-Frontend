import { Link } from "react-router-dom";
import AdminNavItem from "./AdminNavItem";
import { adminNavData } from "./adminNavData";

const AdminSidebar = () => {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-white">
      {/* Logo */}
      <div className="border-b border-border px-6 py-5">
        <Link to="/admin" className="block">
          <h1 className="text-xl font-black text-heading">
            🟤 NovaCart
          </h1>

          <p className="mt-0.5 text-xs font-medium text-muted">
            Admin Panel
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {adminNavData.map((item) => (
            <AdminNavItem key={item.path} item={item} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <p className="text-center text-xs text-muted">
          NovaCart AI
        </p>
      </div>
    </aside>
  );
};

export default AdminSidebar;