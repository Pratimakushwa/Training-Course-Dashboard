
import {
  GraduationCap,
  BookOpen,
  Clock3,
  CircleCheck,
  Sparkles,
  SearchX,
  ArrowRight,
  RotateCcw
} from "lucide-react";

import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";
import CourseCard from "../Components/CourseCard";

function CourseDashboard({
  courses,
  search,
  setSearch,
  category,
  setCategory
}) {

  // Search and category filter
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  // Course counts
  const completedCount = courses.filter(
    (course) => course.progress === 100
  ).length;

  const inProgressCount = courses.filter(
    (course) => course.progress > 0 && course.progress < 100
  ).length;

  const completionPercent = courses.length > 0
    ? (completedCount / courses.length) * 100
    : 0;

  return (
    <div className="min-h-screen bg-[#F8F9FD]">

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 shadow-lg shadow-violet-200">
              <GraduationCap size={24} className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Learn<span className="text-violet-600">Track</span>
              </h1>
              <p className="text-xs text-slate-500">
                Training Course Dashboard
              </p>
            </div>
          </div>

          <span className="hidden rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700 sm:block">
            My Learning Space
          </span>

        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-10">

        {/* Welcome Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 p-7 text-white shadow-xl shadow-violet-200/50 sm:p-10">

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10"></div>
          <div className="absolute -bottom-28 right-32 h-60 w-60 rounded-full bg-white/5 blur-2xl"></div>

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-medium">
                <Sparkles size={15} />
                YOUR LEARNING JOURNEY
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Learn new skills.
                <br />
                Grow every day.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-violet-100 sm:text-base">
                Explore your courses, track your progress and
                take the next step towards your goals.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Keep moving forward
                <ArrowRight size={17} />
              </div>
            </div>

            {/* Learning Progress Card */}
            <div className="rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-sm sm:p-7">

              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-violet-100">
                  Your Learning Progress
                </p>
                <BookOpen size={21} className="text-violet-100" />
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-extrabold">
                  {completedCount}
                </span>
                <span className="mb-1 text-lg text-violet-200">
                  / {courses.length} Courses
                </span>
              </div>

              <p className="mt-2 text-sm text-violet-100">
                Courses completed so far
              </p>

              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-white transition-all duration-500"
                  style={{ width: completionPercent + "%" }}
                ></div>
              </div>

              <p className="mt-3 text-right text-xs font-semibold text-white">
                {Math.round(completionPercent)}% Completed
              </p>

            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
              <BookOpen size={26} className="text-violet-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Total Courses</p>
              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                {courses.length}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
              <Clock3 size={26} className="text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">In Progress</p>
              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                {inProgressCount}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
              <CircleCheck size={26} className="text-emerald-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Completed</p>
              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                {completedCount}
              </h3>
            </div>
          </div>

        </section>

        {/* Courses Section */}
        <section className="mt-12">

          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600">
              COURSE LIBRARY
            </span>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Explore Your Courses
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find the right course and continue your learning journey.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div className="sm:col-span-2">
              <SearchBar
                search={search}
                setSearch={setSearch}
              />
            </div>

            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />

          </div>

          <div className="mb-5 mt-6 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-500">
              Showing {filteredCourses.length}{" "}
              {filteredCourses.length === 1 ? "course" : "courses"}
            </p>

            {(search || category !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-800"
              >
                <RotateCcw size={15} />
                Reset Filters
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 ? (

            <div className="rounded-3xl border border-slate-100 bg-white px-5 py-16 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-50">
                <SearchX size={36} className="text-violet-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No courses found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try a different search or select another category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 cursor-pointer rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Clear Filters
              </button>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}

            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <footer className="mt-14 border-t border-slate-200 bg-white py-6">
        <p className="text-center text-xs text-slate-400">
          LearnTrack · Training Course Dashboard
        </p>
      </footer>

    </div>
  );
}

export default CourseDashboard;
