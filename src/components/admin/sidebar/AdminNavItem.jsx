import { NavLink } from "react-router-dom";

const AdminNavItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/admin"}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-primary text-white shadow-sm"
            : "text-muted hover:bg-primary/5 hover:text-primary"
        }`
      }
    >
      <Icon size={18} />
      <span>{item.label}</span>
    </NavLink>
  );
};

export default AdminNavItem;