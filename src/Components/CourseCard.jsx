
import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Laptop,
  Clock3,
  ArrowUpRight,
  CircleCheck
} from "lucide-react";

function CourseCard({ course }) {
  const completed = course.progress === 100;

  // Choose icon based on category
  let CourseIcon = Laptop;

  if (course.category === "Programming") {
    CourseIcon = Code2;
  }

  if (course.category === "Design") {
    CourseIcon = Palette;
  }

  return (
    <Link
      to="/course-details"
      state={{ courseId: course.id }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100"
    >

      {/* Card Top */}
      <div className="relative bg-gradient-to-br from-violet-50 via-indigo-50 to-white p-5">

        <div className="flex items-start justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
            <CourseIcon
              size={28}
              className="text-violet-600"
            />
          </div>

          <span
            className={
              completed
                ? "flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700"
                : "rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-violet-600 shadow-sm"
            }
          >
            {completed && <CircleCheck size={13} />}
            {completed ? "Completed" : "In Progress"}
          </span>

        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-violet-600">
          {course.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {course.title}
        </h3>

      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">

        <p className="min-h-12 flex-1 text-sm leading-6 text-slate-500">
          {course.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
          <Clock3 size={16} className="text-violet-500" />
          {course.duration}
        </div>

        {/* Progress */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">
            Course Progress
          </span>

          <span className="text-sm font-bold text-violet-700">
            {course.progress}%
          </span>
        </div>

        <div
          className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={course.title + " progress"}
          aria-valuenow={course.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={
              completed
                ? "h-full rounded-full bg-emerald-500 transition-all duration-500"
                : "h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
            }
            style={{ width: course.progress + "%" }}
          ></div>
        </div>

        {/* Details Button Style */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

          <span className="text-sm font-semibold text-violet-600">
            View Course Details
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
            <ArrowUpRight size={19} />
          </span>

        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
