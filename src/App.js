import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");

  // Load students from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) setStudents(JSON.parse(saved));
  }, []);

  // Save students to LocalStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add or Edit student
  const handleAddStudent = (student) => {
    if (editingStudent) {
      setStudents(
        students.map((s) => (s.id === editingStudent.id ? student : s))
      );
      setEditingStudent(null);
    } else {
      setStudents([...students, student]);
    }
  };

  // Delete student
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Filter students based on search input
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Render login if not logged in
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div>
      <Navbar onLogout={() => setIsLoggedIn(false)} />

      <div className="container mt-4">
        {/* Search */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Add/Edit Form */}
        <StudentForm
          onSubmit={handleAddStudent}
          editingStudent={editingStudent}
        />

        {/* Student Table */}
        <StudentTable
          students={filteredStudents}
          onEdit={(s) => setEditingStudent(s)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;