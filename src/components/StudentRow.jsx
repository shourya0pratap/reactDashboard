import React from "react";

const StudentRow = ({ student, onUpdateScore }) => {
  // Conditional rendering: Display pass/fail based on score
  const isPassing = student.studentMarks >= 40;
  const statusText = isPassing ? "Pass" : "Fail";

  // Apply different styles: Green for pass, Red for fail
  const statusStyle = {
    color: isPassing ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <tr>
      <td>{student.studentName}</td>
      <td>{student.studentMarks}</td>
      <td style={statusStyle}>{statusText}</td>
      <td>
        <input
          type="number"
          className="formInput"
          value={student.studentMarks}
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          min="0"
          max="100"
        />
      </td>
    </tr>
  );
};

export default StudentRow;
