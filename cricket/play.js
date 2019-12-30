var x = 18;
var y=18;
var score1=0;
var score2=0;
document.getElementById('output-area').innerHTML = x;
function button2() {
    document.getElementById('output-area').innerHTML = "remaining balls:"+--x;
    if(x==0){
        alert("your turn over")
    }
  }
  //generate random score
  function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo").innerHTML ="Run:"+ x;
     score1 +=x;
    
    console.log(score1)
  }




  document.getElementById('output-area2').innerHTML = y;
function button3() {
    document.getElementById('output-area2').innerHTML = "remaining balls:"+--y;
    if(y==0){
        alert("your turn over")
    }
  }
  //generate random score
  function myFunctions() {
    var y = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo2").innerHTML ="Run:"+ y;
    score2+=y;
    var arr1=[]
    arr1.push(y)
    console.log(arr1)
    //console.log(score2)
  }
  function winner(){
      if (score1 > score2){
          alert("player1 wins")
          document.getElementById("result").innerHTML="Player 1 wins";
      }
      if (score1==score2){
        alert("draw")
        document.getElementById("result").innerHTML="Draw";
      }
      else{
        alert("player2 wins")
        document.getElementById("result").innerHTML="player 2 wins";
      }
  }
  function redirect(){

    location.href='result.html';
  }


  // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  