import {
  Search,
  Plus,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";
import { useState } from "react";

const initialCategories = [
  {
    id: 1,
    name: "Laptops",
    slug: "laptops",
    products: 124,
    status: "Active",
  },
  {
    id: 2,
    name: "Smartphones",
    slug: "smartphones",
    products: 186,
    status: "Active",
  },
  {
    id: 3,
    name: "Headphones",
    slug: "headphones",
    products: 78,
    status: "Active",
  },
  {
    id: 4,
    name: "Fashion",
    slug: "fashion",
    products: 342,
    status: "Active",
  },
  {
    id: 5,
    name: "Shoes",
    slug: "shoes",
    products: 216,
    status: "Inactive",
  },
  {
    id: 6,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    products: 198,
    status: "Active",
  },
];

const AdminCategories = () => {
  const [categories, setCategories] = useState(initialCategories);

  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    status: "Active",
  });

  const [categoryToEdit, setCategoryToEdit] = useState(null);

  const [editForm, setEditForm] = useState({
    name: "",
    status: "Active",
  });
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [categoryToView, setCategoryToView] = useState(null);

  const filteredCategories = categories.filter((category) => {
    const query = search.toLowerCase().trim();

    return (
      !query ||
      category.name.toLowerCase().includes(query) ||
      category.slug.toLowerCase().includes(query)
    );
  });

  const handleAddCategory = (e) => {
    e.preventDefault();

    const name = categoryForm.name.trim();

    if (!name) return;

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const newCategory = {
      id: Date.now(),
      name,
      slug,
      products: 0,
      status: categoryForm.status,
    };

    setCategories((prevCategories) => [...prevCategories, newCategory]);

    setCategoryForm({
      name: "",
      status: "Active",
    });

    setShowAddModal(false);
  };

  const handleEditCategory = (e) => {
    e.preventDefault();

    if (!categoryToEdit) return;

    const name = editForm.name.trim();

    if (!name) return;

    const slug = name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryToEdit.id
          ? {
              ...category,
              name,
              slug,
              status: editForm.status,
            }
          : category,
      ),
    );

    setCategoryToEdit(null);
  };

  const handleDeleteCategory = () => {
    if (!categoryToDelete) return;

    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryToDelete.id),
    );

    setCategoryToDelete(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-heading">Categories</h1>

          <p className="mt-1 text-sm text-muted">
            Manage product categories across NovaCart.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <Plus size={17} />
          Add Category
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
            placeholder="Search categories..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
      </div>

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredCategories.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-heading">
            {categories.length}
          </span>{" "}
          categories
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">Category</th>

                <th className="px-5 py-4 font-medium">Slug</th>

                <th className="px-5 py-4 font-medium">Products</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                        {category.name.charAt(0)}
                      </div>

                      <p className="text-sm font-semibold text-heading">
                        {category.name}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-muted">
                    {category.slug}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    {category.products}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        category.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(
                            openMenu === category.id ? null : category.id,
                          )
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === category.id && (
                        <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setCategoryToView(category);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View Category
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setCategoryToEdit(category);

                              setEditForm({
                                name: category.name,
                                status: category.status,
                              });

                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Pencil size={16} />
                            Edit Category
                          </button>

                          <div className="my-1 border-t border-border" />

                          <button
                            type="button"
                            onClick={() => {
                              setCategoryToDelete(category);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                            Delete Category
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredCategories.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {category.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {category.name}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">{category.slug}</p>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === category.id ? null : category.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === category.id && (
                  <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setCategoryToView(category);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View Category
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setCategoryToEdit(category);

                        setEditForm({
                          name: category.name,
                          status: category.status,
                        });

                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Pencil size={16} />
                      Edit Category
                    </button>

                    <div className="my-1 border-t border-border" />

                    <button
                      type="button"
                      onClick={() => {
                        setCategoryToDelete(category);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete Category
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

                <p className="mt-1 text-xs font-semibold">
                  {category.products}
                </p>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  category.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category.status}
              </span>
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No categories found.
          </div>
        )}
      </div>
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleAddCategory}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">Add Category</h2>

                <p className="mt-1 text-sm text-muted">
                  Create a new product category.
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
                  Category Name
                </label>

                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) =>
                    setCategoryForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g. Gaming"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-sm font-medium text-heading">
                  Status
                </label>

                <select
                  value={categoryForm.status}
                  onChange={(e) =>
                    setCategoryForm((prev) => ({
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
                disabled={!categoryForm.name.trim()}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      )}
      {categoryToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleEditCategory}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">
                  Edit Category
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Update category information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCategoryToEdit(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-heading">
                  Category Name
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
                onClick={() => setCategoryToEdit(null)}
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
      {categoryToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Delete Category?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-heading">
                {categoryToDelete.name}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setCategoryToDelete(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteCategory}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete Category
              </button>
            </div>
          </div>
        </div>
      )}
      {categoryToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {categoryToView.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-heading">
                    {categoryToView.name}
                  </h2>

                  <p className="text-xs text-muted">Category Details</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCategoryToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Category Name</span>

                <span className="text-sm font-semibold text-heading">
                  {categoryToView.name}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Slug</span>

                <span className="text-sm font-semibold text-heading">
                  {categoryToView.slug}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Products</span>

                <span className="text-sm font-semibold text-heading">
                  {categoryToView.products}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    categoryToView.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {categoryToView.status}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setCategoryToView(null)}
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

export default AdminCategories;
