// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

const students = {}

function addStudents (newStudentNumber,newStudent){
    students[newStudentNumber] = newStudent
}

addStudents(1,"suleman ahmed")
addStudents(2,"Daniyal Nagori")


console.log(students)

