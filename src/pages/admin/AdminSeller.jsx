import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  Eye,
  Pencil,
  Ban,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const initialSellers = [
  {
    id: 1,
    storeName: "Tech World",
    ownerName: "Arjun Patel",
    email: "arjun@techworld.com",
    products: 124,
    orders: 842,
    status: "Active",
    joined: "08 Aug 2026",
  },
  {
    id: 2,
    storeName: "Nova Fashion",
    ownerName: "Priya Mehta",
    email: "priya@novafashion.com",
    products: 86,
    orders: 521,
    status: "Active",
    joined: "05 Aug 2026",
  },
  {
    id: 3,
    storeName: "Gadget Hub",
    ownerName: "Aman Gupta",
    email: "aman@gadgethub.com",
    products: 214,
    orders: 1284,
    status: "Active",
    joined: "01 Aug 2026",
  },
  {
    id: 4,
    storeName: "Daily Essentials",
    ownerName: "Neha Verma",
    email: "neha@dailyessentials.com",
    products: 64,
    orders: 318,
    status: "Blocked",
    joined: "28 Jul 2026",
  },
  {
    id: 5,
    storeName: "Home Decor Hub",
    ownerName: "Rahul Sharma",
    email: "rahul@homedecor.com",
    products: 97,
    orders: 647,
    status: "Active",
    joined: "24 Jul 2026",
  },
];

const AdminSellers = () => {
  const [sellers, setSellers] = useState(initialSellers);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);

  const [sellerToView, setSellerToView] = useState(null);
  const [sellerToEdit, setSellerToEdit] = useState(null);
  const [sellerToDelete, setSellerToDelete] = useState(null);

  const [editForm, setEditForm] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    status: "Active",
  });

  // =========================
  // FILTER
  // =========================

  const filteredSellers = sellers.filter((seller) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      seller.storeName.toLowerCase().includes(query) ||
      seller.ownerName.toLowerCase().includes(query) ||
      seller.email.toLowerCase().includes(query);

    const matchesStatus =
      status === "All" || seller.status === status;

    return matchesSearch && matchesStatus;
  });

  // =========================
  // BLOCK / UNBLOCK
  // =========================

  const handleToggleStatus = (sellerId) => {
    setSellers((prevSellers) =>
      prevSellers.map((seller) =>
        seller.id === sellerId
          ? {
              ...seller,
              status:
                seller.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : seller,
      ),
    );

    setOpenMenu(null);
  };

  // =========================
  // EDIT SELLER
  // =========================

  const handleEditSeller = (e) => {
    e.preventDefault();

    if (!sellerToEdit) return;

    setSellers((prevSellers) =>
      prevSellers.map((seller) =>
        seller.id === sellerToEdit.id
          ? {
              ...seller,
              storeName: editForm.storeName,
              ownerName: editForm.ownerName,
              email: editForm.email,
              status: editForm.status,
            }
          : seller,
      ),
    );

    setSellerToEdit(null);
  };

  // =========================
  // DELETE SELLER
  // =========================

  const handleDeleteSeller = () => {
    if (!sellerToDelete) return;

    setSellers((prevSellers) =>
      prevSellers.filter(
        (seller) => seller.id !== sellerToDelete.id,
      ),
    );

    setSellerToDelete(null);
  };

  // =========================
  // OPEN EDIT MODAL
  // =========================

  const openEditModal = (seller) => {
    setSellerToEdit(seller);

    setEditForm({
      storeName: seller.storeName,
      ownerName: seller.ownerName,
      email: seller.email,
      status: seller.status,
    });

    setOpenMenu(null);
  };

  // =========================
  // ACTION MENU
  // =========================

  const renderActionMenu = (seller) => (
    <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
      {/* View */}
      <button
        type="button"
        onClick={() => {
          setSellerToView(seller);
          setOpenMenu(null);
        }}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
      >
        <Eye size={16} />
        View Seller
      </button>

      {/* Edit */}
      <button
        type="button"
        onClick={() => openEditModal(seller)}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
      >
        <Pencil size={16} />
        Edit Seller
      </button>

      {/* Block / Unblock */}
      <button
        type="button"
        onClick={() => handleToggleStatus(seller.id)}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-yellow-50 hover:text-yellow-700"
      >
        <Ban size={16} />

        {seller.status === "Active"
          ? "Block Seller"
          : "Unblock Seller"}
      </button>

      <div className="my-1 border-t border-border" />

      {/* Delete */}
      <button
        type="button"
        onClick={() => {
          setSellerToDelete(seller);
          setOpenMenu(null);
        }}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
      >
        <Trash2 size={16} />
        Delete Seller
      </button>
    </div>
  );

  return (
    <div>
      {/* =========================
          HEADER
      ========================= */}

      <div>
        <h1 className="text-2xl font-black text-heading">
          Sellers
        </h1>

        <p className="mt-1 text-sm text-muted">
          Manage stores and sellers on NovaCart.
        </p>
      </div>

      {/* =========================
          TOOLBAR
      ========================= */}

      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5 lg:max-w-md">
          <Search
            size={18}
            className="shrink-0 text-muted"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stores, sellers..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        {/* Status */}

        <div className="flex items-center gap-2">
          <SlidersHorizontal
            size={16}
            className="text-muted"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>
      </div>

      {/* =========================
          COUNT
      ========================= */}

      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredSellers.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-heading">
            {sellers.length}
          </span>{" "}
          sellers
        </p>
      </div>

      {/* =========================
          DESKTOP TABLE
      ========================= */}

      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">
                  Store
                </th>

                <th className="px-5 py-4 font-medium">
                  Owner
                </th>

                <th className="px-5 py-4 font-medium">
                  Products
                </th>

                <th className="px-5 py-4 font-medium">
                  Orders
                </th>

                <th className="px-5 py-4 font-medium">
                  Status
                </th>

                <th className="px-5 py-4 font-medium">
                  Joined
                </th>

                <th className="px-5 py-4 text-right font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredSellers.map((seller) => (
                <tr
                  key={seller.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                        {seller.storeName.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-heading">
                          {seller.storeName}
                        </p>

                        <p className="mt-0.5 text-xs text-muted">
                          {seller.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium">
                      {seller.ownerName}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    {seller.products}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    {seller.orders.toLocaleString()}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        seller.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {seller.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-muted">
                    {seller.joined}
                  </td>

                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(
                            openMenu === seller.id
                              ? null
                              : seller.id,
                          )
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                        aria-label={`Actions for ${seller.storeName}`}
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === seller.id &&
                        renderActionMenu(seller)}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredSellers.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No sellers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================
          MOBILE CARDS
      ========================= */}

      <div className="mt-4 space-y-3 md:hidden">
        {filteredSellers.map((seller) => (
          <div
            key={seller.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {seller.storeName.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {seller.storeName}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">
                    {seller.ownerName}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(
                      openMenu === seller.id
                        ? null
                        : seller.id,
                    )
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                  aria-label={`Actions for ${seller.storeName}`}
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === seller.id &&
                  renderActionMenu(seller)}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Products
                </p>

                <p className="mt-1 text-xs font-semibold">
                  {seller.products}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Orders
                </p>

                <p className="mt-1 text-xs font-semibold">
                  {seller.orders.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Status
                </p>

                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium ${
                    seller.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {seller.status}
                </span>
              </div>
            </div>
          </div>
        ))}

        {filteredSellers.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No sellers found.
          </div>
        )}
      </div>

      {/* =========================
          VIEW SELLER MODAL
      ========================= */}

      {sellerToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {sellerToView.storeName.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-heading">
                    {sellerToView.storeName}
                  </h2>

                  <p className="text-xs text-muted">
                    {sellerToView.ownerName}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSellerToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">
                  Owner
                </span>

                <span className="text-sm font-semibold text-heading">
                  {sellerToView.ownerName}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">
                  Email
                </span>

                <span className="max-w-[220px] truncate text-sm font-semibold text-heading">
                  {sellerToView.email}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">
                  Products
                </span>

                <span className="text-sm font-semibold text-heading">
                  {sellerToView.products}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">
                  Orders
                </span>

                <span className="text-sm font-semibold text-heading">
                  {sellerToView.orders.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">
                  Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    sellerToView.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {sellerToView.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">
                  Joined
                </span>

                <span className="text-sm font-semibold text-heading">
                  {sellerToView.joined}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSellerToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          EDIT SELLER MODAL
      ========================= */}

      {sellerToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleEditSeller}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">
                  Edit Seller
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Update seller information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSellerToEdit(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Store Name */}

              <div>
                <label className="text-sm font-medium text-heading">
                  Store Name
                </label>

                <input
                  type="text"
                  value={editForm.storeName}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      storeName: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Owner Name */}

              <div>
                <label className="text-sm font-medium text-heading">
                  Owner Name
                </label>

                <input
                  type="text"
                  value={editForm.ownerName}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      ownerName: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Email */}

              <div>
                <label className="text-sm font-medium text-heading">
                  Email
                </label>

                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Status */}

              <div>
                <label className="text-sm font-medium text-heading">
                  Status
                </label>

                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Blocked">
                    Blocked
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSellerToEdit(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* =========================
          DELETE SELLER MODAL
      ========================= */}

      {sellerToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Delete Seller?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-heading">
                {sellerToDelete.storeName}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSellerToDelete(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteSeller}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete Seller
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSellers;