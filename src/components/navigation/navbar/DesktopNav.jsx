
import { navLinks } from "./navData";

const DesktopNav = () => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="relative text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNav;
