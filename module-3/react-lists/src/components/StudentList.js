// src/components/StudentList.js
import StudentCard from './StudentCard';
import React, { useState } from 'react';
const studentsData = ['Marc', 'Lucy', 'Anna'];

function StudentList() {

  const [students, updateStudents] = useState(studentsData);
  const deleteStudent = () => {
    const updatedStudents = [...students];
    updatedStudents.pop();
    updateStudents(updatedStudents);    
  }
  return (
    <div className="list">
      <h2>Student List</h2>
      { students.map( (name, index) => {
        return ( <StudentCard name={name} /> )
      }) }
      <button onClick={ () => deleteStudent() }>Delete</button>
    </div>
  );
}

export default StudentList;
