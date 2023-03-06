
var modal = document.getElementById("adModal");
var span = document.getElementsByClassName("close")[0];

function myFunction() {
    $duration = 5;
			$('.seconds').text($duration);
			$myTimer = setInterval(function(){ startTimer() }, 1000);

			
			function startTimer(){
				$duration--;
				$('.seconds').text($duration);
				if($duration==0){
					clearInterval($myTimer);

				}
			}
  setTimeout(()=>{
    span.disabled = false;			
    
    console.log('Button Activated')}, 5000)
    span.disabled = true;
    span.onclick = function() {
        modal.style.display = "none";
}

}



var typingTimer;               
var doneTypingInterval = 3000; 


var $input = $('#InputName'); // default value

function clickedinput(element){
    console.log($input);
    $input = $('#'+element);

$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});


$input.on('keydown', function () {
  clearTimeout(typingTimer);
});


function doneTyping () {
  modal.style.display = "block";
  myFunction();
}
}
function submitbutton(){
    alert("Your form has been submitted");
}

