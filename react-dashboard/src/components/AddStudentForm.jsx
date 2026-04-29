import React, { useState } from "react";

const AddStudentForm = () => {
  const [formData, updateFormData] = useState({ name: "", marks: 0, status:"fail" });
  return (
    <div>
      <form id="appForm"></form>
    </div>
  );
};

export default AddStudentForm;
