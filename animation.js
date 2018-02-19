$(document).ready(function() {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var suunta = "normal";
  //var context = canvas.getContext('2d');
   
  /* Player */
  
  //$("#speeddown").click(console.log("tässä"));

  window.addEventListener("keydown", function(e) {
    
  });


 
 

  //$("#speeddown").click(changeS("down"));
 // document.getElementById('speedup').addEventListener("click", changeS("up"));
  //$("#speeddown").click(function() {changeS("down")});
  //$("#speedup").click(function() {changeS("up")});
  /*checkBounds*/
 //ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
 


  var checkBounds = function() {
    //ctx.fillText("Points: " + player.points, 400,300);
    if (player.x > 400 - player.width) {
      player.x = 400 - player.width;
    }
    if (player.x < 0) {
      player.x = 0;
    }
    if (player.y > 400 - player.height) {
      player.y = 400 - player.height;
    }
    if (player.y < 0) {
      player.y = 0;
    }
    
  };
  
  var checkCollision = function() {
    var x = Math.abs(player.x - berry.x);
    var y = Math.abs(player.y - berry.y);
    if (x < player.width && y < player.height) {
      player.points += 1;
      //ctx.fillText("Points: " + player.points, 400,300);
      //console.log("points:" + player.points);
      return true;
    }
  };
  
 
  
  /*Enemies*/
  
 
  
  /*KeyCodes*/
  window.oncontextmenu = function (){
  alert('Right Click')
}
  
  var keycodes = {};
  
  window.addEventListener("keydown", function(e) {
    e.preventDefault();
    keycodes[e.keyCode] = true;
  });
  
    window.addEventListener("keyup", function(e) {
    delete keycodes[e.keyCode];
  });
  
  rectObject = canvas.getBoundingClientRect();

  window.addEventListener("mousedown", function(e) {

    var rect = canvas.getBoundingClientRect();  // get element's abs. position
    var canvasX = event.clientX - rect.left;              // get mouse x and adjust for el.
    var canvasY = event.clientY - rect.top;               // get mouse y and adjust for el.
    //console.log("x:" + canvasX);
    //  console.log("y:" + canvasY);

      if((canvasX >= 400) & (canvasY >= 80) & (canvasY <= 120)) {
        changeS("up");
      }

      if((canvasX >= 400) & (canvasY >= 220) & (canvasY <= 300)) {
        changeS("down");
      }

for (i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      //console.log( "enemyX: " +enemy.x )
      //console.log("enemyy: " + enemy.y  )
     if((enemy.x <= canvasX) & ((enemy.x + 30) >= canvasX) & (enemy.y <= canvasY) & ((enemy.y + 30) >= canvasY)) {
       //console.log("osu");
        enemies.splice(i, 1);
      }
    }
      
  });

  /*Animation*/
  var render = function() {
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,400,400);
    drawPlayer(ctx, kerrat, liikkuu, suunta);
    drawBerry(ctx);
    drawEnemies(ctx, lives);
    ctx.fillStyle = "white";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Points: " + player.points, 10,10);
    testaa();
      
  };

  var liikkuu = false
  
  var update = function() {
    moveEnemies();
    liikkuu = false
    if (37 in keycodes) {
       movePlayer("left");
       liikkuu = true
       suunta = "left";

      // console.log("suunta:" + suunta);
    }
    if (39 in keycodes) {
       movePlayer("right");
       liikkuu = true
       suunta = "right";
        //console.log("suunta:" + suunta);
    }
    if (38 in keycodes) {
       movePlayer("up");
        liikkuu = true
        suunta = "up";
    }
    if (40 in keycodes) {
       movePlayer("down");
       liikkuu = true
        suunta = "down";
    } 
    if (187 in keycodes) {

       changeS("up");
    }  
    if (189 in keycodes) {
       changeS("down");
    }
    if (32 in keycodes) {
       reset();
    }
  };
  var reset = function(){
      resetE();
       resetP();
       keycodes = {};
      enemies = [];
      addEnemies(4);
      berry.x = Math.round(Math.random() * 390);
      berry.y = Math.round(Math.random() * 390);
  };

  var testaa = function(enemy) {
if(gameOver) {
  //console.log("toimii")
  reset();
  gameOver = false;
 }
};

var kerrat = 0;
  var main = function() {
    update();
    render();
    requestAnimationFrame(main);

   kerrat = kerrat + 1;
  

   if(kerrat > 60 ){
    kerrat = 0;
   };
   
  };

/*
  var increaseSpeed = function() {
    player.speed = Math.min(player.speed + 0.5, 10);
    console.log(player.speed);
  }

  var decreaseSpeed = function() {
    player.speed = Math.max(player.speed - 0.5, 1);
    console.log(player.speed);
  }


 $("#morespeed").click(increaseSpeed);

  $("#lessspeed").click(decreaseSpeed);
*/
  
  
  main();
  
});