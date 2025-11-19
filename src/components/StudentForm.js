import React, { useState, useEffect } from "react";

function StudentForm({ onSubmit, editingStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setCourse(editingStudent.course);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      id: editingStudent ? editingStudent.id : Date.now(),
      name,
      course,
    };

    onSubmit(student);
    setName("");
    setCourse("");
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h4>{editingStudent ? "Edit Student" : "Add Student"}</h4>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            placeholder="Enter student name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            value={course}
            placeholder="Enter course"
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success w-100">
          {editingStudent ? "Save Changes" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
