//GET THE CONAINER THAT CONTAIN THE FORTUNES
var fortunes = document.getElementById("fortunes")

//ARRAY OF FORTUNES
var array = ["You will fall in love with someone you don't expect very soon.", "You will meet a long time friend this week.", "You will misplace an item today.", "Accept the next proposal you get, It will change your life.", "Someone is looking up to you, don't let that person down !!!", "Don't be afraid to take that big step !!!", "You're currently planning on something great, don't let anyone hold you back !!!", "You'll live a long life", "You'll get a car soon", "Your favorite food is coming your way", "You're planning on learning something new, go for it !!!", "You've got something really bothering you, ask for help and hope for the best", "You'll get a huge surprise on your next birthday", "You will be tempted to do something bad soon, don't fall for it !!!", "You will get hungry in an hour time", "Don't mistake temptation with opportunity !!!", "Avoid taking unnecessary gambles. Lucky numbers: 12, 15, 23, 28, 37", "You think it's a secret but they know.", "You were told a secret recently, don't spill it !!!", "A family member will surprise your whole family this week."]

//DISPLAY RANDOM FORTUNE ON BUTTON PRESSED
function tellFortune() {
	fortunes.innerHTML = array[Math.floor(Math.random() * array.length)]
}