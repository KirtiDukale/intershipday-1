import './StudentCard.css';

const StudentCard = ({ student, onToggleStatus }) => {
  const isActive = student.status === 'active';

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div>
          <p className="student-role">Student Profile</p>
          <h3>{student.fullName}</h3>
        </div>

        <span className={`status-pill ${isActive ? 'status-active' : 'status-inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      <div className="student-card-body">
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>College:</strong> {student.collegeName}
        </p>
        <p>
          <strong>Course:</strong> {student.course}
        </p>
        <p className="status-message">{isActive ? '🟢 Active Student' : '🔴 Inactive Student'}</p>
      </div>

      <button type="button" className="toggle-button" onClick={() => onToggleStatus(student.id)}>
        {isActive ? 'Mark Inactive' : 'Mark Active'}
      </button>
    </article>
  );
};

export default StudentCard;