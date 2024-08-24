// Inputs
const studentData = {};

// Feedback variables
const resultFeedback = "";

function updateStudentData() {
  studentData.name = document.getElementById("student-name").value;
  studentData.result = document.getElementById("student-result").value;
}

document.getElementById("test-button").addEventListener("click", () => {
  // Add test code here.
  console.log(studentData.name);
});
