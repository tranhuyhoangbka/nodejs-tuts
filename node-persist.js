//load module node-persist
var storage = require('node-persist');

//ham khoi tao
// load du lieu da luu tren o
storage.initSync({
  dir : "students" // cau hinh noi luu tru du lieu nam trong thu muc student
});

function getAllStudents()
{
  // lay sinh vien tu noi luu tru
  var students = storage.getItemSync('students');

  // neu khong co sv nao thi tra ve mang rong
  if (typeof students === "undefined") {
    return [];
  }

  // nguoc lai tra ve danh sach sv
  return students;
}

function getStudent(studentId)
{
  // lay danh sach sv
  var students = getAllStudents();
  //bien luu tru sv duoc tim thay
  var matchedStudent = null;
  //Lap de tim sv
  for (var i = students.length - 1; i >= 0; i--) {
    if (students[i].id === studentId) {
      matchedStudent = students[i];
      break;
    }
  }
  return matchedStudent;
}

function addStudent(id, fullname)
{
  var students = getAllStudents();
  students.push({
    id : id,
    fullname : fullname
  });
  storage.setItemSync('students', students)
}

function removeStudent(studentId)
{
  var students = getAllStudents();
  for (var i = students.length - 1; i >= 0; i--) {
    if(students[i].id === studentId) {
      students.splice(i, 1);
    }
  }
  storage.setItemSync('students', students);
}

function editStudent(studentId, studentName)
{
  students = getAllStudents();
  for (var i = students.length - 1; i >= 0; i--) {
    if(students[i].id === studentId){
      students[i].fullname = studentName;
    }
  }
  storage.setItemSync('students', students);
}

function showStudents()
{
  var students = getAllStudents();
  students.forEach(function(student){
    console.log('Student: ' + student.fullname + ' (' + student.id + ')');
  });
}

// Thêm sinh viên
// addStudent(1, 'Cuong');
// addStudent(2, 'Kinh');
// addStudent(3, 'Chinh');
// addStudent(4, 'Quyen');

// Hiển thị danh sách sinh viên
//xoa
removeStudent(1);
showStudents();
