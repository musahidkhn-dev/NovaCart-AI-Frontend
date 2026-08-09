const stats = [
  {
    id: 1,
    value: "20K+",
    label: "Products",
  },
  {
    id: 2,
    value: "500+",
    label: "Trusted Sellers",
  },
  {
    id: 3,
    value: "99%",
    label: "Secure Shopping",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-8">
      {stats.map((item) => (
        <div key={item.id}>
          <h3 className="text-2xl font-bold text-text">
            {item.value}
          </h3>

          <p className="mt-0.5 text-sm text-muted">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;