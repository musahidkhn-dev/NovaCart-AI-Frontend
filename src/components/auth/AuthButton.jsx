const AuthButton = ({
  children,
  type = "submit",
  loading = false,
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default AuthButton;