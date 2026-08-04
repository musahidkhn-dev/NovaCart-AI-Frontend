import { Menu } from "lucide-react";
const MobileNav = () => {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-surface-alt lg:hidden">
      <Menu size={22} />
    </button>
  );
};

export default MobileNav;
