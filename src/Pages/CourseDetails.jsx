
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Clock3,
  CircleCheck,
  Check,
  Award
} from "lucide-react";

function CourseDetails({ courses, completeCourse }) {
  const location = useLocation();
  const courseId = location.state?.courseId;

  const course = courses.find(
    (item) => item.id === courseId
  );

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F9FD] px-4 text-center">
        <BookOpen size={50} className="text-violet-500" />

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Course not found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Please select a course from the dashboard.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const completed = course.progress === 100;

  return (
    <div className="min-h-screen bg-[#F8F9FD]">

      {/* Navbar */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600">
            <GraduationCap size={24} className="text-white" />
          </div>

          <h1 className="text-xl font-extrabold text-slate-900">
            Learn<span className="text-violet-600">Track</span>
          </h1>

        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">

        {/* Back Link */}
        <Link
          to="/"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-violet-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">

          {/* Course Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 p-7 text-white sm:p-10">

            <div className="absolute -right-12 -top-20 h-60 w-60 rounded-full border-[30px] border-white/10"></div>

            <div className="relative z-10">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/20">
                <BookOpen size={31} />
              </div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold">
                {course.category}
              </span>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {course.title}
              </h2>

              <div className="mt-5 flex items-center gap-2 text-sm text-violet-100">
                <Clock3 size={18} />
                {course.duration}
              </div>

            </div>
          </div>

          {/* Course Information */}
          <div className="grid grid-cols-1 gap-8 p-6 sm:p-9 lg:grid-cols-3">

            <div className="lg:col-span-2">

              <h3 className="text-xl font-bold text-slate-900">
                About This Course
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                {course.description}
              </p>

              <div className="mt-9 border-t border-slate-100 pt-8">

                <h3 className="text-xl font-bold text-slate-900">
                  What You Will Learn
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Topics covered in this course
                </p>

                <div className="mt-5 space-y-3">
                  {course.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                        <Check size={17} className="text-emerald-600" />
                      </div>

                      <span className="text-sm font-medium text-slate-700">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Progress Card */}
            <div className="h-fit rounded-2xl border border-violet-100 bg-violet-50/50 p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-bold text-slate-900">
                  Your Progress
                </h3>

                <Award size={24} className="text-violet-600" />

              </div>

              <p className="mt-7 text-5xl font-extrabold text-violet-600">
                {course.progress}%
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Course completion
              </p>

              <div
                className="mt-5 h-3 overflow-hidden rounded-full bg-violet-100"
                role="progressbar"
                aria-label="Course progress"
                aria-valuenow={course.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
                  style={{ width: course.progress + "%" }}
                ></div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {completed
                  ? "Great job! You have completed this course."
                  : "You are making progress. Keep learning!"}
              </p>

              <button
                onClick={() => completeCourse(course.id)}
                disabled={completed}
                className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-4 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-emerald-600 disabled:shadow-none"
              >
                <CircleCheck size={19} />
                {completed ? "Course Completed" : "Mark as Completed"}
              </button>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseDetails;
