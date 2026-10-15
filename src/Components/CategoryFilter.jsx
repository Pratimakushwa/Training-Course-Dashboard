
import { Filter } from "lucide-react";

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="relative">
      <Filter
        size={19}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filter courses by category"
        className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-10 text-sm text-slate-800 shadow-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
      >
        <option value="All">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
      </select>

      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
        ▼
      </div>
    </div>
  );
}

export default CategoryFilter;
