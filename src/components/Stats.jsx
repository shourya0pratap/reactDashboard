import React from "react";

const Stats = ({ students }) => {
  const totalStudents = students.length;
  const passedStudents = students.filter(
    (student) => student.studentMarks >= 40,
  ).length;
  const totalMarks = students.reduce(
    (sum, student) => sum + student.studentMarks,
    0,
  );
  const averageScore =
    totalStudents === 0 ? 0 : (totalMarks / totalStudents).toFixed(2);

  return (
    <div id="statsWrapper">
      <h2>Dashboard Stats</h2>
      <div className="statsRow">
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
    </div>
  );
};

export default Stats;
