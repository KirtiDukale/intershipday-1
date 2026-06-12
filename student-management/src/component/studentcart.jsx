function StudentCard({ student, onToggleStatus }) {
  const isActive = student.status === 'Active';

  return (
    <article className="student-card">
      <div className="student-card__header">
        <div>
          <h3>{student.fullName}</h3>
          <p>{student.course}</p>
        </div>

        <span className={isActive ? 'status-badge active' : 'status-badge inactive'}>
          {isActive ? '🟢 Active Student' : '🔴 Inactive Student'}
        </span>
      </div>

      <dl className="student-details">
        <div>
          <dt>Email</dt>
          <dd>{student.email}</dd>
        </div>
        <div>
          <dt>College</dt>
          <dd>{student.collegeName}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{student.status}</dd>
        </div>
      </dl>

      <button className="secondary-button" type="button" onClick={() => onToggleStatus(student.id)}>
        Toggle Status
      </button>
    </article>
  );
}

export default StudentCard;
