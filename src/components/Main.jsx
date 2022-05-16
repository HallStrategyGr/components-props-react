import React, { useState } from 'react';
import Greet from './Greet';

const students = [
    {id: 1, firstName: 'Wade', lastName: 'Booth'},
    {id: 2, firstName: 'Maria', lastName: 'Bruno'},
    {id: 3, firstName: 'Arthur', lastName: 'Silva'},
    {id: 4, firstName: 'Alex', lastName: 'Hall'},
    {id: 5, firstName: 'Chole'},
]

//loop through each student so you can greet them individually using their names
function Main() {
    const [studentList, setStudentList] = useState(students);
    const handleClick = () => {
//add Rodrigo to list of students
const rodrigo = { id: 6, firstName: 'Rodrigo' }
setStudentList([...students, rodrigo])
document.querySelector('button').style.display = 'none'
}    
return (
      <main>
          <button onClick={handleClick}>Add Rodrigo</button>
          {studentList.map(student => {
              return (
              <Greet 
              key={student.id} 
              firstName={student.firstName}
              lastName={student.lastName} />
              )
            })}
      </main>
    );
  }

  export default Main;
  