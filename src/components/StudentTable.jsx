import React from "react";
import StudentRow from "./StudentRow";

const StudentTable = ({ students, onUpdateScore, onDeleteStudent }) => {
  return (
    <div id="tableWrapper">
      <h2>Student Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
              onDeleteStudent={onDeleteStudent}
            />
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No students added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
