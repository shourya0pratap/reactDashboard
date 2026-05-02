import React from "react";

const StudentRow = ({ student, onUpdateScore, onDeleteStudent }) => {
  const isPassing = student.studentMarks >= 40;
  const statusText = isPassing ? "Pass" : "Fail";

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
          className="formInput tableInput"
          value={student.studentMarks}
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          min="0"
          max="100"
        />
      </td>
      <td>
        <button
          className="deleteBtn"
          onClick={() => onDeleteStudent(student.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
