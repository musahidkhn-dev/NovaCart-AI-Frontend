import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroActions = ({ primary, secondary }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {primary}

        <ArrowRight size={18} />
      </Link>

      <Link
        to="/compare"
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-surface-alt"
      >
        <Sparkles size={18} />

        {secondary}
      </Link>
    </div>
  );
};

export default HeroActions;