import React from "react";

const Stats = ({ students }) => {
  const totalStudents = students.length;

  // Calculate how many students have a score of 40 or higher
  const passedStudents = students.filter(
    (student) => student.studentMarks >= 40,
  ).length;

  // Calculate average score
  const totalMarks = students.reduce(
    (sum, student) => sum + student.studentMarks,
    0,
  );
  const averageScore =
    totalStudents === 0 ? 0 : (totalMarks / totalStudents).toFixed(2);

  return (
    <div
      id="statsWrapper"
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h3>Dashboard Stats</h3>
      <p>
        <strong>Total Students:</strong> {totalStudents}
      </p>
      <p>
        <strong>Students Passed:</strong> {passedStudents}
      </p>
      <p>
        <strong>Average Score:</strong> {averageScore}
      </p>
    </div>
  );
};

export default Stats;
