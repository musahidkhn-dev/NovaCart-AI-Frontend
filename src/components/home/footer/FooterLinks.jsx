const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer text-muted transition-all duration-300 hover:text-primary hover:translate-x-1"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;