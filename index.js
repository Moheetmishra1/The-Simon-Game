var userClickedPattern=[];
var gamePattern=[];   
var buttonColours=["red","green","blue","yellow"];

function nextsequence(){
    ++level;
    $("h1").text("Level "+level);
    var randomNumber= Math.round(Math.random()*3);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);

}
var started=false;
var level=0;
// for(var i=0;i<$(""))
$(".btn").click(function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
  
  checkAnswer(userClickedPattern.length);
});



function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel-1]===gamePattern[currentLevel-1]){
        if(level===userClickedPattern.length){
            setTimeout(function(){
                userClickedPattern=[];
            nextsequence();
               
            },100);
            
        }}
        else{
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
                $("h1").text("Game Over, Press Any Key to Restart");
        },200);
            startover();
        }
    
}
function startover(){

    level=0;
    gamePattern=[];
    started=false;
    userClickedPattern=[];
    
}
  $(document).keypress(function(){
   if(!started){
    $("h1").text("Level "+level);
    nextsequence();
    started=true;
    }
  })

  function playSound(name){
    var p=new Audio("sounds/"+name+".mp3");
    p.play();     
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}