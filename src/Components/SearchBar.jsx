
import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search courses by title..."
        aria-label="Search courses by title"
        className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
      />
    </div>
  );
}

export default SearchBar;
