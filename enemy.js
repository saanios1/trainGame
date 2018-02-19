
  

var berry = {
    x: 200,
    y: 200,
    w: 10,
    h: 10,
    color: 'gray'
  };
    var gameOver = false
    var lives = 5;
  

 

  var drawBerry = function(ctx) {
    ctx.fillStyle = berry.color;
    ctx.fillRect(berry.x, berry.y, berry.w, berry.h);
    //ctx.fillText("Points: " + player.points, 400,300);
  };
  
  /*Enemies*/


  var enemies = [];
  
var addEnemies = function(count) {
    for (i = 0; i< count ; i++) {
      var enemy = {
        x: Math.random() * 370,
        y: (i * 90) + ((i+ 1)* Math.random()*20),
        speed: Math.random() * 3 + 2,
        w: 30,
        h: 30,
        color: '#00ff00'
      };
      enemies.push(enemy);
      //console.log( "x: " +enemy.x + " y: " +enemy.y)
    }
  };
  
    
  var drawEnemies = function(context, lives) {
    var kuva = new Image;
    if(lives == 5) {    
     kuva.src = "assets/viis.png"; 
   } else if(lives == 4) {    
     kuva.src = "assets/nel.png"; 
   } else if(lives == 3) {    
     kuva.src = "assets/kol.png"; 
   } else if(lives == 2) {    
     kuva.src = "assets/kaks.png"; 
   } else {
     kuva.src = "assets/yks.png"; 
     //console.log("livees:" + lives)
   }

    for (i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      context.drawImage(kuva, enemy.x, enemy.y);
      
    }
  };
  
   addEnemies(4);
  
  var moveEnemies = function(ctx) { 
    for(i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      moveEnemy(enemy, ctx);
     
    }
   };
  
var resetE = function(berry) {      
       lives = 5;     
   };
  
  var moveEnemy= function(enemy, context){
    if(enemy.direction === 0){
    enemy.x += enemy.speed;
      if(enemy.x > 370){
        enemy.x = 370;
        enemy.direction = 1;
      }
    } else{
      enemy.x -= enemy.speed;
      if(enemy.x < 0){
        enemy.x = 0;
        enemy.direction = 0;
      }
    }
    var x = Math.abs(player.x - enemy.x);
    var y = Math.abs(player.y - enemy.y);
    
    if(x < player.width && y < player.height){
     
     enemy.x = Math.random() * 370;
     enemy.y = (i * 90) + (20*(i+1)* Math.random()),
     //console.log("i: " + i + " random: " +Math.random() + " y." + enemy.y);
     lives -=1;
     //console.log("lives:" + lives);
     if (lives <= 0) {
      gameOver = true;
      window.alert("Game Over");
      //console.log("you lost");
       gameOver= true

      
      berry.x = Math.round(Math.random() * 390);
      berry.y = Math.round(Math.random() * 390);    }   
    /*if (enemy.lives == 0) {
      gameOver = true;
      window.alert("you dead");
    }*/
     
    }
  };
  