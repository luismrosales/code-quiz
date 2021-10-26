var start = $("#start-quiz");
var timer = 76;
var countdown;
var display = 0;
var score = 0;
var submitResult = $(".submitResult");
var initials = $(".initials");

var questions = [
  {
    title: "JAVASCRIPT is used for making web pages ________",
    choices: ["Pretty", "Faster", "Stylish", "Interactive"],
    answer: 4,
  },
  {
    title: "what is HTML used for in web development?",
    choices: [
      "describing the functionality of web pages",
      "describing the structure of web pages",
      "used to make web pages interactive",
      "used for styling ",
    ],
    answer: 2,
  },
  {
    title: "Which of the following is true about CSS?",
    choices: [
      "CSS is used for styling the webpage",
      "CSS collects data",
      "user interactivity ",
      "CSS stands for customer service and support",
    ],
    answer: 1,
  },
  {
    title: "What is jquery?",
    choices: [
      "A request of information ",
      "A request of data",
      "A JAVASCRIPT simplifier",
      "An access object",
    ],
    answer: 3,
  },
  {
    title: "Who made Bootstrap?",
    choices: ["Facebook", "Google", "Twitter", "Netflix"],
    answer: 3,
  },
  {
    title: "Which was the first programming language?",
    choices: [
      "Alogrithm for the analytical engine",
      "Fortran",
      "JAVASCRIPT",
      "C",
    ],
    answer: 1,
  },
];

start.on("click", function () {
  countdown = setInterval(function () {
    timer--;

    $("#timer").text(timer);
    if (timer === 0) {
      clearInterval(countdown);
    }
  }, 1000);
  $(".container").remove();
  $(".hidden").removeClass("hidden");

  addNewText();
});

$(".ansBtn").on("click", function () {
  console.log(this.id);
  if (!(this.id === "answer" + questions[display].answer)) {
    timer -= 30;
    $(".displayAnswer").text("Wrong!");
  } else {
    $(".displayAnswer").text("Correct!");
  }
  if (display + 1 != questions.length) {
    display = display + 1;
    addNewText();
  } else {
    score = timer;
    $(".allDone").text("All Done!");
    $(".finalScore").text(`Your final score is: ${score}`);
    $(".submitResult").text("Submit");

    $("#showQ").remove();
    $("#answer1").remove();
    $("#answer2").remove();
    $("#answer3").remove();
    $("#answer4").remove();
    $("#timer").remove();
    $(".hidden2").removeClass("hidden2");
  }
});

function addNewText() {
  $("#showQ").text(questions[display].title);
  $("#answer1").text(questions[display].choices[0]);
  $("#answer2").text(questions[display].choices[1]);
  $("#answer3").text(questions[display].choices[2]);
  $("#answer4").text(questions[display].choices[3]);
}

submitResult.on("click", function () {
  const allDone = initials.val();
  window.location.href = "./highscore.html" + "#" + allDone + "," + score;
});
