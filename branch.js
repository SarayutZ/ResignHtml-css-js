function showBranches() {
   

    var faculty = document.getElementById("faculties").value;
    if(faculty ==="0"){
        for (var k=1;k<=13;k++){
            document.getElementById("test"+k).style.display = "none";
        }
    }
    for (var i = 1; i < faculty; i++) {
      document.getElementById("test"+i).style.display = "none";
    }
    for (var j =faculty ;j<=13;j++){
      document.getElementById("test"+j).style.display = "none";
  }
  document.getElementById("test"+faculty).style.display = "block";
  
}
  
  document.getElementById("faculties").addEventListener("change", showBranches);