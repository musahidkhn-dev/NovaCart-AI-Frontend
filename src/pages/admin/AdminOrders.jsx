import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  Eye,
  Pencil,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const initialOrders = [
  {
    id: "NC-10001",
    customer: "Rahul Sharma",
    seller: "Tech World",
    items: 2,
    amount: 119900,
    payment: "Paid",
    status: "Delivered",
    date: "12 Aug 2026",
  },
  {
    id: "NC-10002",
    customer: "Priya Mehta",
    seller: "Gadget Hub",
    items: 1,
    amount: 104999,
    payment: "Paid",
    status: "Shipped",
    date: "11 Aug 2026",
  },
  {
    id: "NC-10003",
    customer: "Arjun Patel",
    seller: "Nova Fashion",
    items: 3,
    amount: 8499,
    payment: "Paid",
    status: "Processing",
    date: "11 Aug 2026",
  },
  {
    id: "NC-10004",
    customer: "Neha Verma",
    seller: "Home Decor Hub",
    items: 2,
    amount: 12999,
    payment: "Pending",
    status: "Pending",
    date: "10 Aug 2026",
  },
  {
    id: "NC-10005",
    customer: "Aman Gupta",
    seller: "Tech World",
    items: 1,
    amount: 29990,
    payment: "Paid",
    status: "Cancelled",
    date: "09 Aug 2026",
  },
  {
    id: "NC-10006",
    customer: "Riya Singh",
    seller: "Computer Zone",
    items: 1,
    amount: 149990,
    payment: "Paid",
    status: "Delivered",
    date: "08 Aug 2026",
  },
];

const AdminOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const [search, setSearch] = useState("");
  const [orderStatus, setOrderStatus] = useState("All");
  const [paymentStatus, setPaymentStatus] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const [orderToView, setOrderToView] = useState(null);
  const [orderToCancel, setOrderToCancel] = useState(null);
  const [orderToUpdate, setOrderToUpdate] = useState(null);

  const filteredOrders = orders.filter((order) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      order.id.toLowerCase().includes(query) ||
      order.customer.toLowerCase().includes(query) ||
      order.seller.toLowerCase().includes(query);

    const matchesOrderStatus =
      orderStatus === "All" || order.status === orderStatus;

    const matchesPaymentStatus =
      paymentStatus === "All" || order.payment === paymentStatus;

    return matchesSearch && matchesOrderStatus && matchesPaymentStatus;
  });

  const getOrderStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Shipped":
        return "bg-blue-100 text-blue-700";

      case "Processing":
        return "bg-yellow-100 text-yellow-700";

      case "Pending":
        return "bg-orange-100 text-orange-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPaymentStatusClass = (payment) => {
    return payment === "Paid"
      ? "bg-green-100 text-green-700"
      : "bg-orange-100 text-orange-700";
  };

  const handleCancelOrder = () => {
    if (!orderToCancel) return;

    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderToCancel.id
          ? {
              ...order,
              status: "Cancelled",
            }
          : order,
      ),
    );

    setOrderToCancel(null);
  };

  const handleUpdateOrderStatus = (e) => {
    e.preventDefault();

    if (!orderToUpdate) return;

    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderToUpdate.id
          ? {
              ...order,
              status: orderToUpdate.status,
            }
          : order,
      ),
    );

    setOrderToUpdate(null);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-heading">Orders</h1>

        <p className="mt-1 text-sm text-muted">
          Manage and monitor NovaCart orders.
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
            placeholder="Search order, customer, seller..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal size={16} className="text-muted" />

          <select
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
            className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Orders</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
            className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Payments</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredOrders.length}
          </span>{" "}
          of <span className="font-semibold text-heading">{orders.length}</span>{" "}
          orders
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">Order</th>

                <th className="px-5 py-4 font-medium">Customer</th>

                <th className="px-5 py-4 font-medium">Seller</th>

                <th className="px-5 py-4 font-medium">Items</th>

                <th className="px-5 py-4 font-medium">Amount</th>

                <th className="px-5 py-4 font-medium">Payment</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 font-medium">Date</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-primary">{order.id}</p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-heading">
                      {order.customer}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm">{order.seller}</td>

                  <td className="px-5 py-4 text-sm">{order.items}</td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    ₹{order.amount.toLocaleString("en-IN")}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getPaymentStatusClass(
                        order.payment,
                      )}`}
                    >
                      {order.payment}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getOrderStatusClass(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-muted">{order.date}</td>

                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(openMenu === order.id ? null : order.id)
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === order.id && (
                        <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setOrderToView(order);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View Order
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setOrderToUpdate(order);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Pencil size={16} />
                            Update Status
                          </button>

                          {order.status !== "Cancelled" &&
                            order.status !== "Delivered" && (
                              <button
                                type="button"
                                onClick={() => {
                                  setOrderToCancel(order);
                                  setOpenMenu(null);
                                }}
                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                              >
                                <XCircle size={16} />
                                Cancel Order
                              </button>
                            )}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-primary">{order.id}</p>

                <p className="mt-1 text-sm font-semibold text-heading">
                  {order.customer}
                </p>

                <p className="mt-0.5 text-xs text-muted">{order.seller}</p>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === order.id ? null : order.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === order.id && (
                  <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setOrderToView(order);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View Order
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setOrderToUpdate(order);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                    >
                      <Pencil size={16} />
                      Update Status
                    </button>

                    {order.status !== "Cancelled" &&
                      order.status !== "Delivered" && (
                        <button
                          type="button"
                          onClick={() => {
                            setOrderToCancel(order);
                            setOpenMenu(null);
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          <XCircle size={16} />
                          Cancel Order
                        </button>
                      )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Items
                </p>

                <p className="mt-1 text-xs font-semibold">{order.items}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Amount
                </p>

                <p className="mt-1 text-xs font-semibold">
                  ₹{order.amount.toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Date
                </p>

                <p className="mt-1 text-xs font-semibold">{order.date}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${getPaymentStatusClass(
                  order.payment,
                )}`}
              >
                {order.payment}
              </span>

              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${getOrderStatusClass(
                  order.status,
                )}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No orders found.
          </div>
        )}
      </div>
      {orderToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-primary">ORDER</p>

                <h2 className="mt-1 text-xl font-bold text-heading">
                  {orderToView.id}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOrderToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Customer */}
            <div className="mt-6 rounded-xl bg-[#FAFAFA] p-4">
              <p className="text-xs uppercase tracking-wide text-muted">
                Customer
              </p>

              <p className="mt-1 text-sm font-semibold text-heading">
                {orderToView.customer}
              </p>
            </div>

            {/* Order Details */}
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Seller</span>

                <span className="text-sm font-semibold">
                  {orderToView.seller}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Items</span>

                <span className="text-sm font-semibold">
                  {orderToView.items}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Amount</span>

                <span className="text-sm font-bold">
                  ₹{orderToView.amount.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Payment</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    orderToView.payment === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {orderToView.payment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getOrderStatusClass(
                    orderToView.status,
                  )}`}
                >
                  {orderToView.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Order Date</span>

                <span className="text-sm font-semibold">
                  {orderToView.date}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOrderToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {orderToCancel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <XCircle size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Cancel Order?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to cancel order{" "}
              <span className="font-semibold text-heading">
                {orderToCancel.id}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This will change the order status to Cancelled.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOrderToCancel(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Keep Order
              </button>

              <button
                type="button"
                onClick={handleCancelOrder}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      )}
      {orderToUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleUpdateOrderStatus}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-primary">ORDER</p>

                <h2 className="mt-1 text-xl font-bold text-heading">
                  Update Order Status
                </h2>

                <p className="mt-1 text-sm text-muted">{orderToUpdate.id}</p>
              </div>

              <button
                type="button"
                onClick={() => setOrderToUpdate(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-heading">
                Order Status
              </label>

              <select
                value={orderToUpdate.status}
                onChange={(e) =>
                  setOrderToUpdate((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="Pending">Pending</option>

                <option value="Processing">Processing</option>

                <option value="Shipped">Shipped</option>

                <option value="Delivered">Delivered</option>

                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOrderToUpdate(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Update Status
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
