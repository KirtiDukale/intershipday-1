import React from 'react';
import './StudentTable.css';

const StudentTable = ({ students }) => {
  const defaultStudents = [
    {
      id: 1,
      name: 'Aman Sharma',
      email: 'aman.sharma@example.com',
      college: 'ABC College',
      batch: '2024',
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      college: 'XYZ Institute',
      batch: '2025',
    },
    {
      id: 3,
      name: 'Rohit Verma',
      email: 'rohit.verma@example.com',
      college: 'LMN University',
      batch: '2023',
    },
  ];

  const data = students && students.length ? students : defaultStudents;

  return (
    <div className="student-table-container">
      <h2>Registered Students</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.college}</td>
              <td>{student.batch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
