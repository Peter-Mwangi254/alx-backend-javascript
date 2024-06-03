export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
