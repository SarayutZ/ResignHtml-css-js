<?php
// เชื่อมต่อกับฐานข้อมูล MySQL (ค่าที่ควรเปลี่ยนตามสภาพแวดล้อมของคุณ)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo1";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("การเชื่อมต่อฐานข้อมูลล้มเหลว: " . $conn->connect_error);
}

// ตั้งค่า character set เป็น utf8mb4
mysqli_set_charset($conn, "utf8mb4");

// รับค่าจากฟอร์มและเก็บในตัวแปร
$date = $_POST['date'];
$title = isset($_POST['title']) ? $_POST['title']: '';
$full_name = $_POST['other_title'];
$student_id = $_POST['student_id'];
$faculty = isset($_POST['faculty']) ? $_POST['faculty'] : '';
$branch = isset($_POST['branch']) ? $_POST['branch'] : '';
$phone = $_POST['phone'];
$course_duration = $_POST['tit'];
$semester = $_POST['semester'];
$reason = $_POST['reason'];

// เขียนคำสั่ง SQL เพื่อเพิ่มข้อมูลลงในตาราง leave_requests
$sql = "INSERT INTO leave_requests (date, title, full_name, student_id, faculty, branch, phone, course_duration, semester, reason)
        VALUES ('$date', '$title', '$full_name', '$student_id', '$faculty', '$branch', '$phone', '$course_duration', '$semester', '$reason')";

if ($conn->query($sql) === TRUE) {
    echo "บันทึกข้อมูลเรียบร้อยแล้ว";
} else {
    echo "เกิดข้อผิดพลาดในการบันทึกข้อมูล: " . $conn->error;
}
if (empty($faculty) || empty($branch)) {
    die("กรุณาเลือกคณะและสาขา");
  }

$conn->close();
?>
