var butt = document.querySelectorAll(".drum")

for (var i = 0; i < butt.length; i++) {
  //  butt[i].addEventListener("click", wDrum);
  butt[i].addEventListener("click", function() {
    //  console.log(this); // this is used to refer to the current event tag, so thaat we got to know which buttoon is clicked.
    //console.log(this.innerHTML); // we can change and do any thing with this inner HTML , like change the clour of the text and etc.
    //    this.style.color = 'white';
    var buttonPressed = this.innerHTML;
    console.log(buttonPressed);

    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
  });
}

function wDrum() {
  alert("clicked");
}


//action from the keyboard
document.addEventListener("keypress", function(event){ // document is the target because whne we press any key alert called
  console.log(event);
  var keypressed = event.key;
    console.log(keypressed);
makeSound(keypressed);
buttonAnimation(keypressed);

});


function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  console.log(activeButton);
  activeButton.classList.add("pressed"); // adding a class preessed , so that in css .pressed will work accordingly
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);



}


function makeSound(key){
  switch (key) {
    case 'w':
      var audio = new Audio("sounds\\crash.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds\\kick-bass.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds\\snare.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds\\tom-1.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds\\tom-2.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds\\tom-3.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds\\tom-4.mp3");
      audio.play();
      break;

    default:
    console.log("Prssed the corred key");

  }
}
