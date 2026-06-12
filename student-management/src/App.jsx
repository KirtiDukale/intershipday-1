import { useEffect, useMemo, useState } from 'react';
import Navbar from './component/Navbar';
import StudentForm from './component/studentform';
import StudentList from './component/Studentlist';
import Footer from './component/Footer';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('Student list updated');
  }, [students.length]);

  const handleAddStudent = (studentDetails) => {
    setStudents((currentStudents) => [
      {
        id: crypto.randomUUID(),
        status: 'Active',
        ...studentDetails,
      },
      ...currentStudents,
    ]);
  };

  const handleToggleStatus = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? { ...student, status: student.status === 'Active' ? 'Inactive' : 'Active' }
          : student,
      ),
    );
  };

  const filteredStudents = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      return students;
    }

    return students.filter((student) => student.fullName.toLowerCase().includes(normalizedTerm));
  }, [searchTerm, students]);

  return (
    <main className="app-shell">
      <Navbar studentCount={students.length} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="hero-panel">
        <div>
          <p className="eyebrow">React Student Manager</p>
          <h1>Add, search, and manage student status in one place.</h1>
          <p className="hero-copy">
            Save student details, search by name, and toggle each student between active and inactive states.
          </p>
        </div>

        <div className="summary-card">
          <h2>Total Students</h2>
          <strong>{students.length}</strong>
          <p>{students.length === 0 ? 'No entries yet.' : 'Students currently saved in the list.'}</p>
        </div>
      </section>

      <section className="content-grid">
        <StudentForm onAddStudent={handleAddStudent} />
        <StudentList students={filteredStudents} onToggleStatus={handleToggleStatus} />
      </section>

      <Footer />
    </main>
  );
}

export default App;
