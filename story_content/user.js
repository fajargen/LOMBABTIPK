function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65tXDoRokwP":
        Script1();
        break;
      case "5rHf2569gSw":
        Script2();
        break;
      case "5bGXqeBBU6Z":
        Script3();
        break;
      case "6fN4wahP1nO":
        Script4();
        break;
      case "6BMHc0D2VvF":
        Script5();
        break;
      case "6jSeJaii5RQ":
        Script6();
        break;
      case "67hwRx613sj":
        Script7();
        break;
      case "6L6ZdBtVhyh":
        Script8();
        break;
      case "5khWCmBK8P7":
        Script9();
        break;
      case "63kPgh7T493":
        Script10();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"musikku.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  clearInterval(timerId);
let sec = 0;
}

function Script8()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("timer",sec);
  if (sec == 60) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

