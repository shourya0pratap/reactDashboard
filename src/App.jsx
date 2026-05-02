import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import AppFooter from "./components/AppFooter";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  const handleUpdateScore = (id, newScore) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, studentMarks: Number(newScore) }
          : student,
      ),
    );
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <Stats students={students} />
      <StudentTable
        students={students}
        onUpdateScore={handleUpdateScore}
        onDeleteStudent={handleDeleteStudent}
      />
      <AppFooter />
    </>
  );
};

export default App;
