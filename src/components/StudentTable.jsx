import React from "react";
import StudentRow from "./StudentRow";

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div id="tableWrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="4">No students added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
