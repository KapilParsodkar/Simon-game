let buttonColors=["red","blue","green","yellow"]
let gamepattern=[]
let userClickedPattern=[]
let level=0
let started=false

$(document).keydown(function(){
    if(!started){
      
        $("#level-title").text("level "+level)
        nextSequence()
        started=true
    }
 
   
})

$(".btn").click(function(){
    let userchosencolor=$(this).attr("id")
    userClickedPattern.push(userchosencolor)
    playsound(userchosencolor)
    animatepress(userchosencolor)
    checkanswer(userClickedPattern.length-1)
 })

 function checkanswer(currentlevel){
    if (gamepattern[currentlevel] === userClickedPattern[currentlevel]) {

        console.log("success");
    

    if(userClickedPattern.length===gamepattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
        }
    }else {
        playsound("wrong");
        $("body").addClass("game-over");

  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
  
      }

     

 
}

 function playsound(name){
    let audio=new Audio("sounds/"+name+".mp3")
    audio.play()
   
 }
function nextSequence(){
   userClickedPattern=[]
    level++
    $("#level-title").text("level "+level)
    let randomNumber=Math.floor(Math.random()*3)+1
   // console.log(randomNumber)
   let randomchosencolor=buttonColors[randomNumber]
   //console.log(randomchosencolor)

 // return randomchosencolor
 gamepattern.push(randomchosencolor)
 //console.log(gamepattern)
 $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100)
 playsound(randomchosencolor)

}
nextSequence()

function animatepress(currentcolor){
    let a=$("#"+currentcolor)
a.addClass("pressed")
setTimeout(function(){
a.removeClass("pressed")
},100)
}





function startOver() {
    level = 0;
    gamepattern = [];
    started = false;
  }