import {
  Users,
  Store,
  Package,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,540",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Total Sellers",
    value: "1,248",
    change: "+8.2%",
    icon: Store,
  },
  {
    title: "Total Products",
    value: "8,642",
    change: "+15.4%",
    icon: Package,
  },
  {
    title: "Total Orders",
    value: "24,891",
    change: "+10.8%",
    icon: ShoppingCart,
  },
];

const revenueData = [
  { month: "Jan", value: 42000 },
  { month: "Feb", value: 52000 },
  { month: "Mar", value: 48000 },
  { month: "Apr", value: 68000 },
  { month: "May", value: 72000 },
  { month: "Jun", value: 84000 },
];

const recentOrders = [
  {
    id: "#NC-1024",
    customer: "Rahul Sharma",
    product: "MacBook Air M4",
    amount: "₹1,19,900",
    status: "Delivered",
  },
  {
    id: "#NC-1023",
    customer: "Priya Mehta",
    product: "Galaxy S25 Ultra",
    amount: "₹1,04,999",
    status: "Processing",
  },
  {
    id: "#NC-1022",
    customer: "Arjun Patel",
    product: "Sony WH-1000XM5",
    amount: "₹29,990",
    status: "Delivered",
  },
  {
    id: "#NC-1021",
    customer: "Neha Verma",
    product: "Pixel 9 Pro XL",
    amount: "₹1,09,999",
    status: "Cancelled",
  },
];
const AdminDashboard = () => {
  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-heading">Dashboard</h1>

        <p className="mt-1 text-sm text-muted">
          Overview of your NovaCart platform.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted">{stat.title}</p>

                  <h2 className="mt-2 text-2xl font-black text-heading">
                    {stat.value}
                  </h2>

                  <p className="mt-2 text-xs font-medium text-green-600">
                    {stat.change} this month
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Revenue + Quick Overview */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* Revenue Overview */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted">Revenue Overview</p>

              <h2 className="mt-1 text-2xl font-black text-heading">₹84,000</h2>

              <p className="mt-1 flex items-center gap-1 text-xs font-medium text-green-600">
                <TrendingUp size={14} />
                +16.7% from last month
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <TrendingUp size={19} />
            </div>
          </div>

          {/* Simple Chart */}
          <div className="mt-8 flex h-52 items-end gap-3 sm:gap-5">
            {revenueData.map((item) => {
              const height = `${(item.value / 90000) * 100}%`;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <div className="flex h-full w-full items-end">
                    <div
                      className="w-full rounded-t-lg bg-primary/80 transition-all duration-300 hover:bg-primary"
                      style={{ height }}
                      title={`₹${item.value.toLocaleString()}`}
                    />
                  </div>

                  <span className="text-[11px] text-muted">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Status */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Order Status</p>

              <h2 className="mt-1 text-2xl font-black text-heading">24,891</h2>
            </div>

            <ShoppingCart size={20} className="text-primary" />
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500" />

                <span className="text-sm">Delivered</span>
              </div>

              <span className="text-sm font-semibold">18,420</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock3 size={18} className="text-yellow-500" />

                <span className="text-sm">Processing</span>
              </div>

              <span className="text-sm font-semibold">4,820</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ArrowUpRight size={18} className="text-blue-500" />

                <span className="text-sm">Shipped</span>
              </div>

              <span className="text-sm font-semibold">1,240</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <XCircle size={18} className="text-red-500" />

                <span className="text-sm">Cancelled</span>
              </div>

              <span className="text-sm font-semibold">411</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 rounded-2xl border border-border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="text-lg font-bold text-heading">Recent Orders</h2>

            <p className="mt-1 text-xs text-muted">
              Latest orders placed on NovaCart.
            </p>
          </div>

          <button
            type="button"
            className="text-xs font-semibold text-primary hover:opacity-80"
          >
            View All
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border text-xs text-muted">
                <th className="px-5 py-4 font-medium">Order</th>

                <th className="px-5 py-4 font-medium">Customer</th>

                <th className="px-5 py-4 font-medium">Product</th>

                <th className="px-5 py-4 font-medium">Amount</th>

                <th className="px-5 py-4 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  <td className="px-5 py-4 text-sm font-semibold">
                    {order.id}
                  </td>

                  <td className="px-5 py-4 text-sm">{order.customer}</td>

                  <td className="px-5 py-4 text-sm text-muted">
                    {order.product}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    {order.amount}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Orders */}
        <div className="space-y-3 p-4 md:hidden">
          {recentOrders.map((order) => (
            <div key={order.id} className="rounded-xl border border-border p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold">{order.id}</p>

                  <p className="mt-1 text-xs text-muted">{order.customer}</p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-muted">{order.product}</p>

                <p className="text-sm font-bold">{order.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
