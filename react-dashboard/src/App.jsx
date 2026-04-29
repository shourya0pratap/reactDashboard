import React, { useContext } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import StudentRow from "./components/StudentRow";
import AppFooter from "./components/AppFooter";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <AddStudentForm />
      <StudentTable />
      <AppFooter />
    </>
  );
};

export default App;
