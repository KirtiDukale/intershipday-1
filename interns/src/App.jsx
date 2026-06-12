
import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import StudentForm from './component/StudentForm';
import StudentList from './component/StudentList';
import Footer from './component/Footer';
import './App.css';

const createStudent = (student) => ({
  ...student,
  id: crypto.randomUUID(),
  status: 'active',
});

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (students.length > 0) {
      console.log('Student list updated');
    }
  }, [students.length]);

  const handleAddStudent = (student) => {
    setStudents((currentStudents) => [createStudent(student), ...currentStudents]);
  };

  const handleToggleStatus = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              status: student.status === 'active' ? 'inactive' : 'active',
            }
          : student,
      ),
    );
  };

  const filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="App">
      <Navbar />

      <main className="app-main">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Student Management Dashboard</p>
            <h1>Add, track, and manage students in one place.</h1>
            <p className="hero-text">
              Add new students, search by name, and toggle their status between active and
              inactive with a clean React workflow.
            </p>
          </div>

          <div className="stats-panel">
            <div className="stat-card">
              <span>Total Students</span>
              <strong>{students.length}</strong>
            </div>
            <div className="stat-card">
              <span>Visible Students</span>
              <strong>{filteredStudents.length}</strong>
            </div>
          </div>
        </section>

        <section className="workspace-section" id="students">
          <div className="controls-row">
            <div className="search-box">
              <label htmlFor="studentSearch">Search Students</label>
              <input
                id="studentSearch"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by student name"
              />
            </div>
          </div>

          <StudentForm onAddStudent={handleAddStudent} />
          <StudentList
            students={filteredStudents}
            onToggleStatus={handleToggleStatus}
            hasStudents={students.length > 0}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

