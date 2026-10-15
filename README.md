# Training Course Dashboard

A responsive Training Course Dashboard built using React JS and Tailwind CSS.

## Technologies Used
- React JS & Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## Features
- Course list with progress bars
- Live search by course title
- Category filter (works with search)
- Course details page
- Mark as Completed (updates progress to 100%)
- No courses found message
- Responsive design

## How to Run

1. Clone or download the repository.
2. Open the project folder.
3. Install dependencies: `npm install`
4. Run the project: `npm run dev`

## Components & State

- **CourseDashboard:** Displays courses, search and filters.
- **CourseCard:** Shows course details and progress.
- **CourseDetails:** Displays course information and completion button.
- **SearchBar & CategoryFilter:** Handle searching and filtering.

React `useState` manages course progress, search and category. `filter()` handles search and category together, while `map()` updates completed courses.

Sample data is used without a backend. Progress resets on refresh.

## Project Links

**Live Demo:** https://trainingcoursedashboard.vercel.app/

**GitHub:** https://github.com/Pratimakushwa/Training-Course-Dashboard