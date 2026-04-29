import React from "react";

const StudentTable = () => {
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
      </table>
    </div>
  );
};

export default StudentTable;
