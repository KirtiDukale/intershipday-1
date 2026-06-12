import StudentCard from './studentcart';

function StudentList({ students, onToggleStatus }) {
  return (
    <section className="panel list-panel">
      <div className="panel-heading">
        <p className="eyebrow">Student List</p>
        <h2>Stored student records</h2>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">No Students Added Yet</div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} onToggleStatus={onToggleStatus} />
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;
