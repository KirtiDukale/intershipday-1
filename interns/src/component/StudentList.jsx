import StudentCard from './StudentCard';
import './StudentList.css';

const StudentList = ({ students, onToggleStatus, hasStudents }) => {
  return (
    <section className="student-list-section">
      <div className="student-list-heading">
        <p className="section-label">Student List</p>
        <h2>Display student information</h2>
      </div>

      {hasStudents ? (
        <div className="student-grid">
          {students.length > 0 ? (
            students.map((student) => (
              <StudentCard key={student.id} student={student} onToggleStatus={onToggleStatus} />
            ))
          ) : (
            <div className="empty-state search-empty-state">
              <h3>No matching students found</h3>
              <p>Try a different search term to find a student.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No Students Added Yet</h3>
          <p>Add a student from the form above to start building the list.</p>
        </div>
      )}
    </section>
  );
};

export default StudentList;