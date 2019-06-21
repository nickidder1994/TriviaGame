//create variables for all questions
var correct 
var incorrect
var question1 
var question2
var question3
//create timer
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
var elem = $(".time-remaining")
// var elem = document.getElementsByClassName("time-remaining");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timer === 0) {
        clearTimeout(timerId);
        alert("Times Up!")
    } else {
        // elem.innerHTML = timer + 'time-remaining';
        elem.text(timer)
        timer--;
    }
    //  $(".time-remaining").append(timer)
    
     //set values to true or false 
     $(".true").click(function () {
         console.log("True")
     });
    $(".false").click(function () {
        console.log("False");
    });
}
// if(true === question1){
//     console.log("correct")
// }else{
//     console.log("incorrect")
