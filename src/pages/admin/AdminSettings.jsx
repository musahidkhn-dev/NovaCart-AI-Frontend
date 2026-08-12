import {
  Settings,
  Store,
  Mail,
  Phone,
  IndianRupee,
  Percent,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    platformName: "NovaCart AI",
    supportEmail: "support@novacart.ai",
    supportPhone: "+91 98765 43210",
    currency: "INR",
    tax: "18",
    maintenanceMode: false,
  });
  const [savedSettings, setSavedSettings] = useState(settings);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveSettings = () => {
    setSavedSettings(settings);
    setShowSavedMessage(true);

    setTimeout(() => {
      setShowSavedMessage(false);
    }, 2500);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Settings size={20} />
          </div>

          <div>
            <h1 className="text-2xl font-black text-heading">Settings</h1>

            <p className="mt-1 text-sm text-muted">
              Manage your NovaCart platform settings.
            </p>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Store size={18} className="text-primary" />

          <div>
            <h2 className="text-base font-bold text-heading">
              General Settings
            </h2>

            <p className="mt-0.5 text-xs text-muted">
              Basic information about your platform.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Platform Name */}
          <div>
            <label className="text-sm font-medium text-heading">
              Platform Name
            </label>

            <input
              type="text"
              value={settings.platformName}
              onChange={(e) => handleChange("platformName", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Support Email */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-heading">
              <Mail size={14} />
              Support Email
            </label>

            <input
              type="email"
              value={settings.supportEmail}
              onChange={(e) => handleChange("supportEmail", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Support Phone */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-heading">
              <Phone size={14} />
              Support Phone
            </label>

            <input
              type="tel"
              value={settings.supportPhone}
              onChange={(e) => handleChange("supportPhone", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="mt-5 rounded-2xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Settings size={18} className="text-primary" />

          <div>
            <h2 className="text-base font-bold text-heading">
              Platform Settings
            </h2>

            <p className="mt-0.5 text-xs text-muted">
              Configure currency, tax and platform availability.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Currency */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-heading">
              <IndianRupee size={14} />
              Currency
            </label>

            <select
              value={settings.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none transition focus:border-primary"
            >
              <option value="INR">INR - Indian Rupee</option>

              <option value="USD">USD - US Dollar</option>

              <option value="EUR">EUR - Euro</option>
            </select>
          </div>

          {/* Tax */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-heading">
              <Percent size={14} />
              Tax (%)
            </label>

            <input
              type="number"
              min="0"
              max="100"
              value={settings.tax}
              onChange={(e) => handleChange("tax", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </div>
        </div>

        {/* Maintenance */}
        <div className="mt-5 flex flex-col gap-4 rounded-xl border border-border bg-[#FAFAFA] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <Wrench size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold text-heading">
                Maintenance Mode
              </p>

              <p className="mt-1 text-xs leading-5 text-muted">
                Temporarily disable customer access while maintenance is in
                progress.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              handleChange("maintenanceMode", !settings.maintenanceMode)
            }
            className={`relative h-6 w-11 shrink-0 rounded-full transition ${
              settings.maintenanceMode ? "bg-primary" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
                settings.maintenanceMode ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Save */}
      <div className="mt-5 flex justify-end">
        {showSavedMessage && (
          <p className="mr-4 text-sm font-medium text-green-600">
            Settings saved successfully.
          </p>
        )}
        
        <button
          type="button"
          onClick={handleSaveSettings}
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
