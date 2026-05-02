import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import AppFooter from "./components/AppFooter";
import "./App.css";

const App = () => {
  // Store student data in the parent component
  const [students, setStudents] = useState([]);

  // Function to add a new student
  const handleAddStudent = (newStudent) => {
    // We add a unique ID (like Date.now()) so React can keep track of the list items
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  // Function to update a student's score
  const handleUpdateScore = (id, newScore) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, studentMarks: Number(newScore) }
          : student,
      ),
    );
  };

  return (
    <>
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <Stats students={students} />
      <StudentTable students={students} onUpdateScore={handleUpdateScore} />
      <AppFooter />
    </>
  );
};

export default App;
