import CategoryIcon from "@/components/ui/CategoryIcon";
import { categories } from "@/data/categories";

export default function CategoryFilter({ active, onChange }) {
  const options = [{ id: "all", name: "All", icon: "stars" }, ...categories];

  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
      {options.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              isActive
                ? "border-transparent bg-gradient-to-r from-gold to-emerald text-ink font-semibold"
                : "glass border-transparent text-slate-300 hover:text-gold"
            }`}
          >
            <CategoryIcon icon={option.icon} size={15} />
            {option.name}
          </button>
        );
      })}
    </div>
  );
}
