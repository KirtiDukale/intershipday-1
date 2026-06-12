import { useState } from 'react';

const initialFormState = {
  fullName: '',
  email: '',
  collegeName: '',
  course: '',
};

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedStudent = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      collegeName: formData.collegeName.trim(),
      course: formData.course.trim(),
    };

    if (
      !trimmedStudent.fullName ||
      !trimmedStudent.email ||
      !trimmedStudent.collegeName ||
      !trimmedStudent.course
    ) {
      return;
    }

    onAddStudent(trimmedStudent);
    setFormData(initialFormState);
  };

  return (
    <section className="panel form-panel">
      <div className="panel-heading">
        <p className="eyebrow">Add Student</p>
        <h2>Capture the student's details</h2>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <label>
          <span>Full Name</span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </label>

        <label>
          <span>College Name</span>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="Enter college name"
          />
        </label>

        <label>
          <span>Course</span>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
        </label>

        <button className="primary-button" type="submit">
          Add Student
        </button>
      </form>
    </section>
  );
}

export default StudentForm;
