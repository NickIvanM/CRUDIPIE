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
    <div className="form-container">
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <button type="submit">
          {editingStudent ? "Save Changes" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
