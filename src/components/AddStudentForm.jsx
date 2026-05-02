import React, { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, updateFormData] = useState({
    studentName: "",
    studentMarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the data up to the App component
    onAddStudent({
      studentName: formData.studentName,
      studentMarks: Number(formData.studentMarks),
    });

    // Clear form after submission
    updateFormData({
      studentName: "",
      studentMarks: "",
    });
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
          placeholder="Score (0 - 100)"
          name="studentMarks"
          value={formData.studentMarks}
          onChange={handleChange}
          required
          min="0"
          max="100"
        />
        <input type="submit" value="+Add" />
      </form>
    </div>
  );
};

export default AddStudentForm;
