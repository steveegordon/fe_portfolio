(function(){
  console.log("Javascript says hello");
  var tv = document.getElementById("screen");
  startGame = function(){
    tv.style.backgroundImage = "url('start.gif')";
    console.log("changed");
  };
  setTimeout(startGame,5000);
})();