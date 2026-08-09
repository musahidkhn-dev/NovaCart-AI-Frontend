const FilterSection = ({
  title,
  children,
}) => {
  return (
    <div className="border-b border-border pb-6">
      <h3 className="mb-4 font-semibold text-heading">
        {title}
      </h3>

      {children}
    </div>
  );
};

export default FilterSection;