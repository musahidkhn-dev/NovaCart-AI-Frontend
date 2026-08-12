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

const initialUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Customer",
    status: "Active",
    joined: "12 Aug 2026",
  },
  {
    id: 2,
    name: "Priya Mehta",
    email: "priya@example.com",
    role: "Customer",
    status: "Active",
    joined: "10 Aug 2026",
  },
  {
    id: 3,
    name: "Arjun Patel",
    email: "arjun@example.com",
    role: "Seller",
    status: "Active",
    joined: "08 Aug 2026",
  },
  {
    id: 4,
    name: "Neha Verma",
    email: "neha@example.com",
    role: "Customer",
    status: "Blocked",
    joined: "05 Aug 2026",
  },
  {
    id: 5,
    name: "Aman Gupta",
    email: "aman@example.com",
    role: "Seller",
    status: "Active",
    joined: "02 Aug 2026",
  },
];

const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToView, setUserToView] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [users, setUsers] = useState(initialUsers);

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: "Customer",
    status: "Active",
  });

  const handleEditUser = (e) => {
    e.preventDefault();

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userToEdit.id
          ? {
              ...user,
              name: editForm.name,
              email: editForm.email,
              role: editForm.role,
              status: editForm.status,
            }
          : user,
      ),
    );

    setUserToEdit(null);
  };

  const handleToggleUserStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user,
      ),
    );

    setOpenMenu(null);
  };

  const handleDeleteUser = () => {
    if (!userToDelete) return;

    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userToDelete.id),
    );

    setUserToDelete(null);
  };

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query);

    const matchesRole = role === "All" || user.role === role;

    const matchesStatus = status === "All" || user.status === status;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-heading">Users</h1>

        <p className="mt-1 text-sm text-muted">
          Manage customers, sellers and platform users.
        </p>
      </div>

      {/* Toolbar */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5 lg:max-w-md">
          <Search size={18} className="shrink-0 text-muted" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-muted" />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
            >
              <option value="All">All Roles</option>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>

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

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredUsers.length}
          </span>{" "}
          of <span className="font-semibold text-heading">{users.length}</span>{" "}
          users
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">User</th>

                <th className="px-5 py-4 font-medium">Role</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 font-medium">Joined</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-heading">
                          {user.name}
                        </p>

                        <p className="mt-0.5 text-xs text-muted">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm">{user.role}</td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-muted">
                    {user.joined}
                  </td>

                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(openMenu === user.id ? null : user.id)
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                        aria-label={`Actions for ${user.name}`}
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === user.id && (
                        <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setUserToView(user);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View User
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setUserToEdit(user);

                              setEditForm({
                                name: user.name,
                                email: user.email,
                                role: user.role,
                                status: user.status,
                              });

                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Pencil size={16} />
                            Edit User
                          </button>

                          <button
                            type="button"
                            onClick={() => handleToggleUserStatus(user.id)}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-yellow-50 hover:text-yellow-700"
                          >
                            <Ban size={16} />
                            {user.status === "Active"
                              ? "Block User"
                              : "Unblock User"}
                          </button>

                          <div className="my-1 border-t border-border" />

                          <button
                            type="button"
                            onClick={() => {
                              setUserToDelete(user);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                            Delete User
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold">{user.name}</p>

                  <p className="mt-0.5 text-xs text-muted">{user.email}</p>
                </div>
              </div>

              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === user.id ? null : user.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                  aria-label={`Actions for ${user.name}`}
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === user.id && (
                  <div className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setUserToView(user);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View User
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setUserToEdit(user);

                        setEditForm({
                          name: user.name,
                          email: user.email,
                          role: user.role,
                          status: user.status,
                        });

                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                    >
                      <Pencil size={16} />
                      Edit User
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleUserStatus(user.id)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-yellow-50 hover:text-yellow-700"
                    >
                      <Ban size={16} />
                      {user.status === "Active" ? "Block User" : "Unblock User"}
                    </button>

                    <div className="my-1 border-t border-border" />

                    <button
                      type="button"
                      onClick={() => {
                        setUserToDelete(user);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete User
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Role
                </p>

                <p className="mt-1 text-xs font-semibold">{user.role}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Status
                </p>

                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">
                  Joined
                </p>

                <p className="mt-1 text-xs font-semibold">{user.joined}</p>
              </div>
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No users found.
          </div>
        )}
      </div>
      {/* Delete Confirmation Modal */}
      {userToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Delete User?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-heading">
                {userToDelete.name}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setUserToDelete(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteUser}
                className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
      {/* View User Modal */}
      {userToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {userToView.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-heading">
                    {userToView.name}
                  </h2>

                  <p className="text-xs text-muted">{userToView.email}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setUserToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Role</span>

                <span className="text-sm font-semibold text-heading">
                  {userToView.role}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-muted">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    userToView.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {userToView.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Joined</span>

                <span className="text-sm font-semibold text-heading">
                  {userToView.joined}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setUserToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {userToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleEditUser}
            className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">Edit User</h2>

                <p className="mt-1 text-sm text-muted">
                  Update user information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setUserToEdit(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-heading">Name</label>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition focus:border-primary"
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
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm font-medium text-heading">Role</label>

                <select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                >
                  <option value="Customer">Customer</option>
                  <option value="Seller">Seller</option>
                </select>
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
                  <option value="Blocked">Blocked</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setUserToEdit(null)}
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
    </div>
  );
};

export default AdminUsers;
