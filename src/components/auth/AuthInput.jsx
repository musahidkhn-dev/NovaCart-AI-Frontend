const AuthInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full rounded-2xl border bg-white px-4 py-3.5 outline-none transition-all duration-300
${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
}`}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default AuthInput;
