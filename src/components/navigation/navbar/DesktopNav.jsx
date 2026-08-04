import { NavLink } from "react-router-dom";
import { navItems } from "./navData";

const DesktopNav = () => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="text-sm font-medium text-muted transition-colors duration-200 hover:text-text"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;