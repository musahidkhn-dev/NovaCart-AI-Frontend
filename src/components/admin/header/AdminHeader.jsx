import { Bell, Search, UserCircle } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-6">
      {/* Search */}
      <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5">
        <Search size={18} className="text-muted" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </div>

      {/* Actions */}
      <div className="ml-6 flex items-center gap-3">
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-surface-alt"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-surface-alt"
        >
          <UserCircle size={24} />

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-heading">
              Admin
            </p>

            <p className="text-xs text-muted">
              Administrator
            </p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;