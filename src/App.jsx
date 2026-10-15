
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { courses as courseData } from "./data/courses";
import CourseDashboard from "./Pages/CourseDashboard";
import CourseDetails from "./Pages/CourseDetails";

function App() {

  const [courses, setCourses] = useState(courseData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Mark course as completed
  function completeCourse(id) {
    const updatedCourses = courses.map((course) => {
      if (course.id === id) {
        return {
          ...course,
          progress: 100
        };
      }

      return course;
    });

    setCourses(updatedCourses);
  }

  return (
    <Routes>

      {/* Dashboard Page */}
      <Route
        path="/"
        element={
          <CourseDashboard
            courses={courses}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
        }
      />

      {/* Course Details Page */}
      <Route
        path="/course-details"
        element={
          <CourseDetails
            courses={courses}
            completeCourse={completeCourse}
          />
        }
      />

    </Routes>
  );
}

export default App;
