// const student = {
//   'firstName': "Boris",
//   'lastName': "Paillard"
// };

const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

// console.log(typeof student);
// // => "object"
student.firstName;
student['firstName'];


student['firstName'] = 'Jess';
student.lastName = 'Smith';


// console.log(student[firstName]); 🙅‍♂️


console.log(student);