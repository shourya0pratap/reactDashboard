# React Student Scoreboard - Lab Assignment 3

A React-based student scoreboard application built for Web Dev II (Advanced JS & React). This project uses a component-based architecture to manage, update, and display student scores dynamically.

The application features a custom, pure CSS **Claymorphism** design without the use of any external UI libraries or Tailwind.

## 🚀 Features

- **Add Students:** Add new students with their names and scores via a dedicated form.
- **Dynamic Table:** View all students in a structured tabular format.
- **Update Scores:** Modify a student's score directly from the table, updating the state in real-time.
- **Delete Records:** Remove a student from the dashboard.
- **Conditional Pass/Fail Status:** Automatically determines status (Pass ≥ 40, Fail < 40) with color-coded text (Green for Pass, Red for Fail).
- **Live Dashboard Stats:** Instantly calculates and displays Total Students, Number of Passed Students, and the Class Average Score.
- **Pure CSS Claymorphism:** Soft, 3D-like user interface using advanced CSS box-shadows (inset and outset).

## 🛠️ Technologies Used

- **React** (Bootstrapped with Vite)
- **JavaScript (JSX)**
- **Pure CSS** (No external frameworks)
- Functional Components & React Hooks (`useState`)

## 📂 Component Structure

The application strictly uses functional components and lifts state to the parent `App` component to manage data flow via props.

```text
src/
├── components/
│   ├── Header.jsx         # Displays the application title
│   ├── Stats.jsx          # Calculates and displays aggregate student data
│   ├── AddStudentForm.jsx # Form to submit new student entries
│   ├── StudentTable.jsx   # Renders the table headers and maps out rows
│   ├── StudentRow.jsx     # Reusable component for individual student data
│   └── AppFooter.jsx      # Bottom footer component
├── App.jsx                # Parent component; holds state and update/delete logic
└── App.css                # Global styles containing the Claymorphism theme
```
