import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavbarActions from "./NavbarAction"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-3">

          <NavbarActions />

        <MobileNav />

        </div>
 
       </div>
    </header>
  );
};

export default Navbar;