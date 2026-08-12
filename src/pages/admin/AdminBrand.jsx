import {
  Search,
  Plus,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const initialBrands = [
  {
    id: 1,
    name: "Apple",
    slug: "apple",
    products: 86,
    status: "Active",
  },
  {
    id: 2,
    name: "Samsung",
    slug: "samsung",
    products: 124,
    status: "Active",
  },
  {
    id: 3,
    name: "Sony",
    slug: "sony",
    products: 68,
    status: "Active",
  },
  {
    id: 4,
    name: "Nike",
    slug: "nike",
    products: 96,
    status: "Active",
  },
  {
    id: 5,
    name: "Adidas",
    slug: "adidas",
    products: 82,
    status: "Inactive",
  },
  {
    id: 6,
    name: "OnePlus",
    slug: "oneplus",
    products: 54,
    status: "Active",
  },
];

const AdminBrands = () => {
  const [brands, setBrands] = useState(initialBrands);

  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [brandForm, setBrandForm] = useState({
    name: "",
    status: "Active",
  });
  const [brandToEdit, setBrandToEdit] = useState(null);

  const [editForm, setEditForm] = useState({
    name: "",
    status: "Active",
  });
  const [brandToDelete, setBrandToDelete] = useState(null);
  const [brandToView, setBrandToView] = useState(null);

  const filteredBrands = brands.filter((brand) => {
    const query = search.toLowerCase().trim();

    return (
      !query ||
      brand.name.toLowerCase().includes(query) ||
      brand.slug.toLowerCase().includes(query)
    );
  });

  const handleAddBrand = (e) => {
    e.preventDefault();

    const name = brandForm.name.trim();

    if (!name) return;

    const slug = name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const newBrand = {
      id: Date.now(),
      name,
      slug,
      products: 0,
      status: brandForm.status,
    };

    setBrands((prevBrands) => [...prevBrands, newBrand]);

    setBrandForm({
      name: "",
      status: "Active",
    });

    setShowAddModal(false);
  };

  const handleEditBrand = (e) => {
    e.preventDefault();

    if (!brandToEdit) return;

    const name = editForm.name.trim();

    if (!name) return;

    const slug = name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setBrands((prevBrands) =>
      prevBrands.map((brand) =>
        brand.id === brandToEdit.id
          ? {
              ...brand,
              name,
              slug,
              status: editForm.status,
            }
          : brand,
      ),
    );

    setBrandToEdit(null);
  };

  const handleDeleteBrand = () => {
    if (!brandToDelete) return;

    setBrands((prevBrands) =>
      prevBrands.filter((brand) => brand.id !== brandToDelete.id),
    );

    setBrandToDelete(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-heading">Brands</h1>

          <p className="mt-1 text-sm text-muted">
            Manage product brands across NovaCart.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <Plus size={17} />
          Add Brand
        </button>
      </div>

      {/* Search */}
      <div className="mt-6 rounded-2xl border border-border bg-white p-4">
        <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5 sm:max-w-md">
          <Search size={18} className="shrink-0 text-muted" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search brands..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
      </div>

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredBrands.length}
          </span>{" "}
          of <span className="font-semibold text-heading">{brands.length}</span>{" "}
          brands
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">Brand</th>

                <th className="px-5 py-4 font-medium">Slug</th>

                <th className="px-5 py-4 font-medium">Products</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBrands.map((brand) => (
                <tr
                  key={brand.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  {/* Brand */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                        {brand.name.charAt(0)}
                      </div>

                      <p className="text-sm font-semibold text-heading">
                        {brand.name}
                      </p>
                    </div>
                  </td>

                  {/* Slug */}
                  <td className="px-5 py-4 text-sm text-muted">{brand.slug}</td>

                  {/* Products */}
                  <td className="px-5 py-4 text-sm font-semibold">
                    {brand.products}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        brand.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {brand.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(openMenu === brand.id ? null : brand.id)
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === brand.id && (
                        <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setBrandToView(brand);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View Brand
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setBrandToEdit(brand);

                              setEditForm({
                                name: brand.name,
                                status: brand.status,
                              });

                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Pencil size={16} />
                            Edit Brand
                          </button>

                          <div className="my-1 border-t border-border" />

                          <button
                            type="button"
                            onClick={() => {
                              setBrandToDelete(brand);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                            Delete Brand
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredBrands.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No brands found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {brand.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {brand.name}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">{brand.slug}</p>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === brand.id ? null : brand.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === brand.id && (
                  <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setBrandToView(brand);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View Brand
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setBrandToEdit(brand);

                        setEditForm({
                          name: brand.name,
                          status: brand.status,
                        });

                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Pencil size={16} />
                      Edit Brand
                    </button>

                    <div className="my-1 border-t border-border" />

                    <button
                      type="button"
                      onClick={() => {
                        setBrandToDelete(brand);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete Brand
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Products
                </p>

                <p className="mt-1 text-xs font-semibold">{brand.products}</p>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  brand.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {brand.status}
              </span>
            </div>
          </div>
        ))}

        {filteredBrands.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No brands found.
          </div>
        )}
      </div>
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleAddBrand}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">Add Brand</h2>

                <p className="mt-1 text-sm text-muted">
                  Create a new product brand.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-heading">
                  Brand Name
                </label>

                <input
                  type="text"
                  value={brandForm.name}
                  onChange={(e) =>
                    setBrandForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g. Apple"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-sm font-medium text-heading">
                  Status
                </label>

                <select
                  value={brandForm.status}
                  onChange={(e) =>
                    setBrandForm((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!brandForm.name.trim()}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Add Brand
              </button>
            </div>
          </form>
        </div>
      )}
      {brandToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleEditBrand}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">Edit Brand</h2>

                <p className="mt-1 text-sm text-muted">
                  Update brand information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setBrandToEdit(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-heading">
                  Brand Name
                </label>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                  autoFocus
                />
              </div>

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
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setBrandToEdit(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!editForm.name.trim()}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
      {brandToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Delete Brand?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-heading">
                {brandToDelete.name}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setBrandToDelete(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteBrand}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete Brand
              </button>
            </div>
          </div>
        </div>
      )}
      {brandToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {brandToView.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-heading">
                    {brandToView.name}
                  </h2>

                  <p className="text-xs text-muted">Brand Details</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBrandToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Brand Name</span>

                <span className="text-sm font-semibold text-heading">
                  {brandToView.name}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Slug</span>

                <span className="text-sm font-semibold text-heading">
                  {brandToView.slug}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Products</span>

                <span className="text-sm font-semibold text-heading">
                  {brandToView.products}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    brandToView.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {brandToView.status}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setBrandToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBrands;
