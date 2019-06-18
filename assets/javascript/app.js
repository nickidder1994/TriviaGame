//create variables for all questions
var rightAnswer
var wrongAnswer
var question1
var question2
var question3
var timer

var windowTimeout = setTimeout(function(){
    alert("Times Up!")
}, 60000)
$(".time-remaining").append(windowTimeout)
console.log(windowTimeout)
// (function( $ ) {
//     $.fn.checked = function(value) {
//         if(value === true || value === false) {
//             // Set the value of the checkbox
//             $(this).each(function(){ this.checked = value; });
//         } 
//         else if(value === undefined || value === 'toggle') {
//             // Toggle the checkbox
//             $(this).each(function(){ this.checked = !this.checked; });
//         }

//         return this;
//     };
//create a timer 
// if player runs out of time alert "out of time"
//set correct answers
//set wrong answers
//alert how many questions were right or wrong
//if player gets all questions right alert "you win"
//if player gets all questions wrong alert "you lose"
//set game to reset after alert 
