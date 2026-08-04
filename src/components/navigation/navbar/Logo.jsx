import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 select-none"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold shadow-sm">
        N
      </div>

      <div className="leading-none">
        <h1 className="text-lg font-extrabold tracking-tight">
          NovaCart
        </h1>

        <p className="text-xs text-muted">
          AI Commerce
        </p>
      </div>
    </Link>
  );
};

export default Logo;