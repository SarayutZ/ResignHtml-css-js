

const branchData = {
  Agricultural: ["เกษตรศาสตร์","พืชสวน"],
  Engineering: ["เทคโนโลยีการอาหาร","เทคโนโลยีอุตสาหการ","เทคโนโลยีพอลิเมอร์","วิศวกรรมเกษตร","วิศวกรรมอาหาร"],
  Science: ["คณิตศาสตร์", "เคมี", "เทคโนโลยีชีวภาพ", "ฟิสิกส์", "วัสดุศาสตร์", "สถิติ", "วิทยาศาสตร์และเทคโนโลยี", "เทคโนโลยีสารสนเทศ", "วิทยาการคอมพิวเตอร์"],
  Administration:["รัฐประศาสนศาสตร์","รัฐศาสตร์"],
  Business:["การเงิน","การจัดการ","การบัญชี","การตลาด","ระบบสารสนเทศ"],
  Tourism:["การท่องเที่ยวและการโรงแรม"],
  Fisheries:["ประมง"],
  Economics:["เศรษฐศาสตร์"],
  Arts:["นิเทศศาสตร์","อังกฤษ"],
  energy:["วิศวกรรมพลังงาน"],
  Information:["ดิจิทัล"],
  Architecture:["ภูมิสถาปัตยกรรม","วางแผนภาคและเมือง","สถาปัตยกรรม"],
  Animal:["สัตวศาสตร์"]




};


function displayBranches() {
  const facultySelect = document.getElementById("faculty");
  const branchSelect = document.getElementById("branch");
  const selectedFaculty = facultySelect.value;
  console.log(selectedFaculty);

  // เคลียร์ค่าสาขาเก่าทุกครั้งที่มีการเลือกคณะใหม่
  branchSelect.innerHTML = "";

  if (selectedFaculty) {
    const branches = branchData[selectedFaculty];
    
    if (branches) {
      for (let branch of branches) {
        const option = document.createElement("option");
        option.text = branch;
        option.value = branch; // เพิ่มบรรทัดนี้เพื่อกำหนดค่า value ให้กับตัวเลือก
        branchSelect.add(option);
        test = branchSelect.add(option);
        console.log(test)
      }
      // แสดงเลือกสาขา
      document.getElementById("branchContainer").style.display = "block";
    } else {
      // ซ่อนเลือกสาขาถ้าไม่มีข้อมูลสาขาของคณะที่เลือก
      document.getElementById("branchContainer").style.display = "none";
    }
  } else {
    // ซ่อนเลือกสาขาเมื่อยังไม่ได้เลือกคณะ
    document.getElementById("branchContainer").style.display = "none";
  }
}
