import React from "react";

function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div className="card p-3 shadow-sm">
      <h4>Student List</h4>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center text-muted py-3">
                No students found.
              </td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(s)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
