import { useState } from 'react';
import './StudentForm.css';

const initialFormState = {
  fullName: '',
  email: '',
  collegeName: '',
  course: '',
};

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddStudent(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="student-form-card" id="register">
      <div className="student-form-heading">
        <p className="section-label">Add Student</p>
        <h2>Capture the student details</h2>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="collegeName">College Name</label>
          <input
            id="collegeName"
            name="collegeName"
            type="text"
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="Enter college name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            name="course"
            type="text"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
