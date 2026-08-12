import { Search, MoreHorizontal, Eye, Pencil, Ban, Plus } from "lucide-react";
import { useState } from "react";

const initialPartners = [
  {
    id: 1,
    name: "Rahul Kumar",
    phone: "+91 98765 43210",
    assignedOrders: 12,
    completedOrders: 86,
    status: "Active",
  },
  {
    id: 2,
    name: "Amit Sharma",
    phone: "+91 87654 32109",
    assignedOrders: 8,
    completedOrders: 64,
    status: "Active",
  },
  {
    id: 3,
    name: "Vikas Patel",
    phone: "+91 76543 21098",
    assignedOrders: 5,
    completedOrders: 48,
    status: "Active",
  },
  {
    id: 4,
    name: "Suresh Yadav",
    phone: "+91 98765 12345",
    assignedOrders: 0,
    completedOrders: 91,
    status: "Offline",
  },
  {
    id: 5,
    name: "Arjun Singh",
    phone: "+91 87654 98765",
    assignedOrders: 3,
    completedOrders: 37,
    status: "Blocked",
  },
  {
    id: 6,
    name: "Rohit Verma",
    phone: "+91 76543 87654",
    assignedOrders: 7,
    completedOrders: 72,
    status: "Active",
  },
];

const AdminDelivery = () => {
  const [partners, setPartners] = useState(initialPartners);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const [partnerToView, setPartnerToView] = useState(null);
  const [partnerToEdit, setPartnerToEdit] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    status: "Active",
  });
  const [partnerToBlock, setPartnerToBlock] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState({
    name: "",
    phone: "",
    status: "Active",
  });

  const filteredPartners = partners.filter((partner) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      partner.name.toLowerCase().includes(query) ||
      partner.phone.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All" || partner.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Offline":
        return "bg-gray-100 text-gray-600";

      case "Blocked":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleEditPartner = (e) => {
    e.preventDefault();

    if (!partnerToEdit) return;

    const name = editForm.name.trim();
    const phone = editForm.phone.trim();

    if (!name || !phone) return;

    setPartners((prevPartners) =>
      prevPartners.map((partner) =>
        partner.id === partnerToEdit.id
          ? {
              ...partner,
              name,
              phone,
              status: editForm.status,
            }
          : partner,
      ),
    );

    setPartnerToEdit(null);
  };

  const handleBlockPartner = () => {
    if (!partnerToBlock) return;

    setPartners((prevPartners) =>
      prevPartners.map((partner) =>
        partner.id === partnerToBlock.id
          ? {
              ...partner,
              status: "Blocked",
            }
          : partner,
      ),
    );

    setPartnerToBlock(null);
  };

  const handleAddPartner = (e) => {
    e.preventDefault();

    const name = addForm.name.trim();
    const phone = addForm.phone.trim();

    if (!name || !phone) return;

    const newPartner = {
      id: Date.now(),
      name,
      phone,
      assignedOrders: 0,
      completedOrders: 0,
      status: addForm.status,
    };

    setPartners((prevPartners) => [...prevPartners, newPartner]);

    setAddForm({
      name: "",
      phone: "",
      status: "Active",
    });

    setShowAddModal(false);
  };
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-heading">Delivery</h1>

          <p className="mt-1 text-sm text-muted">
            Manage NovaCart delivery partners and their orders.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <Plus size={17} />
          Add Partner
        </button>
      </div>

      {/* Toolbar */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5 sm:max-w-md">
          <Search size={18} className="shrink-0 text-muted" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search delivery partner..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
        >
          <option value="All">All Partners</option>

          <option value="Active">Active</option>

          <option value="Offline">Offline</option>

          <option value="Blocked">Blocked</option>
        </select>
      </div>

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredPartners.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-heading">{partners.length}</span>{" "}
          delivery partners
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">Delivery Partner</th>

                <th className="px-5 py-4 font-medium">Phone</th>

                <th className="px-5 py-4 font-medium">Assigned Orders</th>

                <th className="px-5 py-4 font-medium">Completed Orders</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredPartners.map((partner) => (
                <tr
                  key={partner.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  {/* Partner */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                        {partner.name.charAt(0)}
                      </div>

                      <p className="text-sm font-semibold text-heading">
                        {partner.name}
                      </p>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="px-5 py-4 text-sm text-muted">
                    {partner.phone}
                  </td>

                  {/* Assigned */}
                  <td className="px-5 py-4 text-sm font-semibold">
                    {partner.assignedOrders}
                  </td>

                  {/* Completed */}
                  <td className="px-5 py-4 text-sm font-semibold">
                    {partner.completedOrders}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                        partner.status,
                      )}`}
                    >
                      {partner.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(
                            openMenu === partner.id ? null : partner.id,
                          )
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === partner.id && (
                        <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setPartnerToView(partner);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View Partner
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setPartnerToEdit(partner);

                              setEditForm({
                                name: partner.name,
                                phone: partner.phone,
                                status: partner.status,
                              });

                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Pencil size={16} />
                            Edit Partner
                          </button>

                          <div className="my-1 border-t border-border" />

                          <button
                            type="button"
                            onClick={() => {
                              if (partner.status === "Blocked") {
                                setPartners((prevPartners) =>
                                  prevPartners.map((item) =>
                                    item.id === partner.id
                                      ? { ...item, status: "Active" }
                                      : item,
                                  ),
                                );

                                setOpenMenu(null);
                              } else {
                                setPartnerToBlock(partner);
                                setOpenMenu(null);
                              }
                            }}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                              partner.status === "Blocked"
                                ? "text-green-600 hover:bg-green-50"
                                : "text-red-600 hover:bg-red-50"
                            }`}
                          >
                            <Ban size={16} />

                            {partner.status === "Blocked"
                              ? "Unblock Partner"
                              : "Block Partner"}
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredPartners.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No delivery partners found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredPartners.map((partner) => (
          <div
            key={partner.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {partner.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {partner.name}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">{partner.phone}</p>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === partner.id ? null : partner.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === partner.id && (
                  <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setPartnerToView(partner);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View Partner
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPartnerToEdit(partner);

                        setEditForm({
                          name: partner.name,
                          phone: partner.phone,
                          status: partner.status,
                        });

                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Pencil size={16} />
                      Edit Partner
                    </button>

                    <div className="my-1 border-t border-border" />

                    <button
                      type="button"
                      onClick={() => {
                        if (partner.status === "Blocked") {
                          setPartners((prevPartners) =>
                            prevPartners.map((item) =>
                              item.id === partner.id
                                ? { ...item, status: "Active" }
                                : item,
                            ),
                          );

                          setOpenMenu(null);
                        } else {
                          setPartnerToBlock(partner);
                          setOpenMenu(null);
                        }
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                        partner.status === "Blocked"
                          ? "text-green-600 hover:bg-green-50"
                          : "text-red-600 hover:bg-red-50"
                      }`}
                    >
                      <Ban size={16} />

                      {partner.status === "Blocked"
                        ? "Unblock Partner"
                        : "Block Partner"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Assigned
                </p>

                <p className="mt-1 text-sm font-semibold">
                  {partner.assignedOrders}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Completed
                </p>

                <p className="mt-1 text-sm font-semibold">
                  {partner.completedOrders}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${getStatusClass(
                  partner.status,
                )}`}
              >
                {partner.status}
              </span>
            </div>
          </div>
        ))}

        {filteredPartners.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No delivery partners found.
          </div>
        )}
      </div>
      {partnerToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {partnerToView.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-heading">
                    {partnerToView.name}
                  </h2>

                  <p className="text-xs text-muted">Delivery Partner Details</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPartnerToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Name</span>

                <span className="text-sm font-semibold text-heading">
                  {partnerToView.name}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Phone</span>

                <span className="text-sm font-semibold text-heading">
                  {partnerToView.phone}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Assigned Orders</span>

                <span className="text-sm font-semibold text-heading">
                  {partnerToView.assignedOrders}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Completed Orders</span>

                <span className="text-sm font-semibold text-heading">
                  {partnerToView.completedOrders}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                    partnerToView.status,
                  )}`}
                >
                  {partnerToView.status}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPartnerToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {partnerToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleEditPartner}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">Edit Partner</h2>

                <p className="mt-1 text-sm text-muted">
                  Update delivery partner information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPartnerToEdit(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Partner Name
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

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Phone
                </label>

                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
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
                  <option value="Offline">Offline</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setPartnerToEdit(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!editForm.name.trim() || !editForm.phone.trim()}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
      {partnerToBlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Ban size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Block Delivery Partner?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to block{" "}
              <span className="font-semibold text-heading">
                {partnerToBlock.name}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This partner will no longer be available for active delivery
              operations.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setPartnerToBlock(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleBlockPartner}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Block Partner
              </button>
            </div>
          </div>
        </div>
      )}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleAddPartner}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">
                  Add Delivery Partner
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Add a new delivery partner to NovaCart.
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

            {/* Form */}
            <div className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Partner Name
                </label>

                <input
                  type="text"
                  value={addForm.name}
                  onChange={(e) =>
                    setAddForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g. Rahul Kumar"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                  autoFocus
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Phone
                </label>

                <input
                  type="tel"
                  value={addForm.phone}
                  onChange={(e) =>
                    setAddForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="+91 98765 43210"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-sm font-medium text-heading">
                  Status
                </label>

                <select
                  value={addForm.status}
                  onChange={(e) =>
                    setAddForm((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                >
                  <option value="Active">Active</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
            </div>

            {/* Footer */}
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
                disabled={!addForm.name.trim() || !addForm.phone.trim()}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Add Partner
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDelivery;
