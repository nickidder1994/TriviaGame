//create variables for all questions
var correct = true
var incorrect = false
var question1
var question2
var question3
// var timer = 30

// var windowTimeout = setTimeout(function(){
//     alert("Times Up!")
// }, 30000)
// console.log(windowTimeout)

// $(".timeRemaining").append(windowTimeout)

// function(countdown){
//     var counter = 30;

//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("time-remaining");
//       }
//       if (counter === 0) {
//         alert("Times Up!")
//           clearInterval(counter);
//       }

//     }, 1000);
//     $(".time-remaining").append(counter)

//   })();
var timer = 30;
var elem = document.getElementsByClassName("time-remaining");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timer === 0) {
        clearTimeout(timerId);
        alert("Times Up!")
    } else {
        elem.innerHTML = timer + 'time-remaining';
        timer--;
    }


    $(".time-remaining").append(timer)


    $(".true").click(function () {
        console.log("True");
    });
    $(".false").click(function () {
        console.log("False");
    });
