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

const initialProducts = [
  {
    id: 1,
    name: "MacBook Air M4",
    brand: "Apple",
    category: "Laptops",
    seller: "Tech World",
    price: 119900,
    stock: 24,
    status: "Active",
  },
  {
    id: 2,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    seller: "Gadget Hub",
    price: 104999,
    stock: 18,
    status: "Active",
  },
  {
    id: 3,
    name: "Pixel 9 Pro XL",
    brand: "Google",
    category: "Smartphones",
    seller: "Gadget Hub",
    price: 109999,
    stock: 7,
    status: "Active",
  },
  {
    id: 4,
    name: "OnePlus 13",
    brand: "OnePlus",
    category: "Smartphones",
    seller: "Nova Electronics",
    price: 69999,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Headphones",
    seller: "Tech World",
    price: 29990,
    stock: 32,
    status: "Active",
  },
  {
    id: 6,
    name: "Dell XPS 14",
    brand: "Dell",
    category: "Laptops",
    seller: "Computer Zone",
    price: 149990,
    stock: 11,
    status: "Active",
  },
];

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const [productToView, setProductToView] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  const [editForm, setEditForm] = useState({
    name: "",
    brand: "",
    category: "Laptops",
    seller: "",
    price: "",
    stock: "",
    status: "Active",
  });
  const [productToDelete, setProductToDelete] = useState(null);

  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.seller.toLowerCase().includes(query);

    const matchesCategory = category === "All" || product.category === category;

    const matchesStatus = status === "All" || product.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleToggleStatus = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              status: product.status === "Active" ? "Blocked" : "Active",
            }
          : product,
      ),
    );

    setOpenMenu(null);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();

    if (!productToEdit) return;

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productToEdit.id
          ? {
              ...product,
              name: editForm.name,
              brand: editForm.brand,
              category: editForm.category,
              seller: editForm.seller,
              price: Number(editForm.price),
              stock: Number(editForm.stock),
              status: editForm.status,
            }
          : product,
      ),
    );

    setProductToEdit(null);
  };

  const handleDeleteProduct = () => {
    if (!productToDelete) return;

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productToDelete.id),
    );

    setProductToDelete(null);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-heading">Products</h1>

        <p className="mt-1 text-sm text-muted">
          Manage products across NovaCart.
        </p>
      </div>

      {/* Toolbar */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Search */}
        <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5 xl:max-w-md">
          <Search size={18} className="shrink-0 text-muted" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, brands, sellers..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal size={16} className="text-muted" />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Categories</option>

            <option value="Laptops">Laptops</option>

            <option value="Smartphones">Smartphones</option>

            <option value="Headphones">Headphones</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Status</option>

            <option value="Active">Active</option>

            <option value="Out of Stock">Out of Stock</option>

            <option value="Blocked">Blocked</option>
          </select>
        </div>
      </div>

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredProducts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-heading">{products.length}</span>{" "}
          products
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">Product</th>

                <th className="px-5 py-4 font-medium">Category</th>

                <th className="px-5 py-4 font-medium">Seller</th>

                <th className="px-5 py-4 font-medium">Price</th>

                <th className="px-5 py-4 font-medium">Stock</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  {/* Product */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                        {product.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-heading">
                          {product.name}
                        </p>

                        <p className="mt-0.5 text-xs text-muted">
                          {product.brand}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4 text-sm text-muted">
                    {product.category}
                  </td>

                  {/* Seller */}
                  <td className="px-5 py-4 text-sm font-medium">
                    {product.seller}
                  </td>

                  {/* Price */}
                  <td className="px-5 py-4 text-sm font-semibold">
                    ₹{product.price.toLocaleString("en-IN")}
                  </td>

                  {/* Stock */}
                  <td className="px-5 py-4">
                    <span
                      className={
                        product.stock === 0
                          ? "text-sm font-semibold text-red-600"
                          : "text-sm font-semibold text-heading"
                      }
                    >
                      {product.stock}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Out of Stock"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(
                            openMenu === product.id ? null : product.id,
                          )
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === product.id && (
                        <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setProductToView(product);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View Product
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setProductToEdit(product);

                              setEditForm({
                                name: product.name,
                                brand: product.brand,
                                category: product.category,
                                seller: product.seller,
                                price: product.price,
                                stock: product.stock,
                                status: product.status,
                              });

                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Pencil size={16} />
                            Edit Product
                          </button>

                          <button
                            type="button"
                            onClick={() => handleToggleStatus(product.id)}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-yellow-50 hover:text-yellow-700"
                          >
                            <Ban size={16} />

                            {product.status === "Blocked"
                              ? "Unblock Product"
                              : "Block Product"}
                          </button>

                          <div className="my-1 border-t border-border" />

                          <button
                            type="button"
                            onClick={() => {
                              setProductToDelete(product);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                            Delete Product
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {product.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {product.name}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">
                    {product.brand} • {product.seller}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === product.id ? null : product.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === product.id && (
                  <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setProductToView(product);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View Product
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProductToEdit(product);

                        setEditForm({
                          name: product.name,
                          brand: product.brand,
                          category: product.category,
                          seller: product.seller,
                          price: product.price,
                          stock: product.stock,
                          status: product.status,
                        });

                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Pencil size={16} />
                      Edit Product
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleStatus(product.id)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-yellow-50 hover:text-yellow-700"
                    >
                      <Ban size={16} />

                      {product.status === "Blocked"
                        ? "Unblock Product"
                        : "Block Product"}
                    </button>

                    <div className="my-1 border-t border-border" />

                    <button
                      type="button"
                      onClick={() => {
                        setProductToDelete(product);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete Product
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Category
                </p>

                <p className="mt-1 text-xs font-semibold">{product.category}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Price
                </p>

                <p className="mt-1 text-xs font-semibold">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Stock
                </p>

                <p
                  className={`mt-1 text-xs font-semibold ${
                    product.stock === 0 ? "text-red-600" : "text-heading"
                  }`}
                >
                  {product.stock}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  product.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : product.status === "Out of Stock"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {product.status}
              </span>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No products found.
          </div>
        )}
      </div>
      {productToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {productToView.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-heading">
                    {productToView.name}
                  </h2>

                  <p className="text-xs text-muted">{productToView.brand}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setProductToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Brand</span>

                <span className="text-sm font-semibold text-heading">
                  {productToView.brand}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Category</span>

                <span className="text-sm font-semibold text-heading">
                  {productToView.category}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Seller</span>

                <span className="text-sm font-semibold text-heading">
                  {productToView.seller}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Price</span>

                <span className="text-sm font-bold text-heading">
                  ₹{productToView.price.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Stock</span>

                <span
                  className={`text-sm font-semibold ${
                    productToView.stock === 0 ? "text-red-600" : "text-heading"
                  }`}
                >
                  {productToView.stock}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    productToView.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : productToView.status === "Out of Stock"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {productToView.status}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setProductToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {productToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleEditProduct}
            className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">Edit Product</h2>

                <p className="mt-1 text-sm text-muted">
                  Update product information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setProductToEdit(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Product Name */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Product Name
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

              {/* Brand */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Brand
                </label>

                <input
                  type="text"
                  value={editForm.brand}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      brand: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Category
                </label>

                <select
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                >
                  <option value="Laptops">Laptops</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Headphones">Headphones</option>
                </select>
              </div>

              {/* Seller */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Seller
                </label>

                <input
                  type="text"
                  value={editForm.seller}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      seller: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Price
                </label>

                <input
                  type="number"
                  min="0"
                  value={editForm.price}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Stock */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Stock
                </label>

                <input
                  type="number"
                  min="0"
                  value={editForm.stock}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      stock: e.target.value,
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
                  <option value="Active">Active</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setProductToEdit(null)}
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
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Delete Product?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-heading">
                {productToDelete.name}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setProductToDelete(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteProduct}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
