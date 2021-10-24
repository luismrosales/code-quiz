var myArr = ["", ""];
var clearHighScore = $("#clear");

var name1 = $("#name1");
var name2 = $("#name2");
var name3 = $("#name3");
var name4 = $("#name4");
var name5 = $("#name5");

var score1 = $("#score1");
var score2 = $("#score2");
var score3 = $("#score3");
var score4 = $("#score4");
var score5 = $("#score5");

var lsa = [
  localStorage.getItem("s1"),
  localStorage.getItem("s2"),
  localStorage.getItem("s3"),
  localStorage.getItem("s4"),
  localStorage.getItem("s5"),
];

var lma = [
  localStorage.getItem("m1"),
  localStorage.getItem("m2"),
  localStorage.getItem("m3"),
  localStorage.getItem("m4"),
  localStorage.getItem("m5"),
];

var text = "";
if (window.location.hash) {
  text = window.location.hash.substring(1);
  addNewHighScore();
}

function addNewHighScore() {
  myArr = text.split(",");
  console.log(myArr);
  for (i = 0; i < lsa.length; i++) {
    if (myArr[1] > lsa[i]) {
      console.log(i);
      listHigh(i);
      break;
    }
  }
}

function listHigh(i) {
  for (j = lsa.length - 2; j >= i; j--) {
    lsa[j + 1] = lsa[j];
    lma[j + 1] = lma[j];
    console.log(lsa[j + 1]);
  }
  lsa[i] = myArr[1];
  lma[i] = myArr[0];

  localStorage.setItem("s" + (i + 1), lsa[i]);
  localStorage.setItem("m" + (i + 1), lma[i]);
}

function loadTable() {
  name1.html(localStorage.getItem("m1"));
  name2.html(localStorage.getItem("m2"));
  name3.html(localStorage.getItem("m3"));
  name4.html(localStorage.getItem("m4"));
  name5.html(localStorage.getItem("m5"));

  score1.html(localStorage.getItem("s1"));
  score2.html(localStorage.getItem("s2"));
  score3.html(localStorage.getItem("s3"));
  score4.html(localStorage.getItem("s4"));
  score5.html(localStorage.getItem("s5"));
}

clearHighScore.on("click", function () {
  for (i = 1; i < 6; i++) {
    localStorage.setItem("s" + i, 0);
    localStorage.setItem("m" + i, "");
  }
  loadTable();
});
loadTable();
