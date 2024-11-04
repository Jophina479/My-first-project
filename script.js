let students = [];

function addStudent() {
    const studentNameInput = document.getElementById('studentName');
    const studentName = studentNameInput.value.trim();
    
    if (studentName) {
        students.push(studentName);
        studentNameInput.value = '';
        renderStudentList();
    } else {
        alert('Please enter a valid student name.');
    }
}

function renderStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = student;
        
        const button = document.createElement('button');
        button.textContent = 'Mark Present';
        button.className = 'attendance-button';
        button.onclick = () => markAttendance(student);
        
        li.appendChild(button);
        studentList.appendChild(li);
    });
}

function markAttendance(student) {
    const attendanceList = document.getElementById('attendanceList');
    const li = document.createElement('li');
    li.textContent = `${student} marked as present.`;
    attendanceList.appendChild(li);
}