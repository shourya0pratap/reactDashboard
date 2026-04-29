import React, { useState } from "react";

const AddStudentForm = () => {
  const [formData, updateFormData] = useState({
    studentName: "",
    studentMarks: "",
    studentStatus: "fail",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = formData.marks >= 40 ? "pass" : "fail";
  };
  return (
    <div id="formWrapper">
      <form id="appForm" onSubmit={handleSubmit}>
        <input
          className="formInput"
          type="text"
          placeholder="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
        <input
          className="formInput"
          type="number"
          placeholder="Score(0 - 100)"
          name="studentMarks"
          value={formData.studentMarks}
          onChange={handleChange}
          required
        />
        <input type="submit" value="+Add" />
      </form>
    </div>
  );
};

export default AddStudentForm;
