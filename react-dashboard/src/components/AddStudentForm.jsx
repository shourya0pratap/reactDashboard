import React, { useState } from "react";

const AddStudentForm = () => {
  const [formData, updateFormData] = useState({
    studentName: "",
    studentMarks: 0,
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
  return (
    <div id="formWrapper">
      <form id="appForm">
        <input
          class="formInput"
          type="text"
          placeholder="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />
        <input
          class="formInput"
          type="number"
          placeholder="Score(0 - 100)"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />
        <input type="submit" value="+Add" />
      </form>
    </div>
  );
};

export default AddStudentForm;
