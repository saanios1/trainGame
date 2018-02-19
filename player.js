 var canvas = document.getElementById('canvas');
 
var suunta = suunta


var player = {

    points: 0,
    x: 200,
    y: 200,
    width: 30,
    height: 30,
    speed: 10,
    color: '#ff0000',
    //image: playerImage
    
  };
 
   var resetP  = function() {
       player.points = 0;
       player.x = 200;
       player.y= 200;
       player.speed= 10;
   };


  var drawPlayer = function(context, kerrat, liikkuu, suunta) {
    var kuva = new Image();
    if(liikkuu) {
     // console.log("suunta: " + suunta)
      if(kerrat < 30) {
        if(suunta=="up"){
          kuva.src = "assets/JunaYlos.png";          //eka
        }else if(suunta=="down"){
          kuva.src = "assets/JunaAlas.png";          //eka
        }else if(suunta=="right"){
          kuva.src = "assets/JunaOikee.png";   
        }else{
            kuva.src = "assets/junaVasen_savu.png";
        }
      }else {
        if(suunta=="up"){
          kuva.src = "assets/junaYlos_savu.png";           //eka
        }else if(suunta=="down"){
          kuva.src = "assets/JunaAlas_savu.png"; 
       }else if(suunta=="right"){
          kuva.src = "assets/JunaOikee_savu.png";     
        }else{
      kuva.src = "assets/junaVase.png";
      }
      }
    } else {
      if(kerrat < 30) {
    kuva.src = "assets/junaVase.png";;
    //
    //console.log("kerrat:" + kerrat)
      }else {
    kuva.src = "assets/junaVasen_savu.png";
      }
    }
    
    context.drawImage(kuva, player.x, player.y);
    //context.fillStyle= player.color;
    //context.fillRect(player.x, player.y, player.width, player.height);
   // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  };


var checkCollision = function() {
    var x = Math.abs(player.x - berry.x);
    var y = Math.abs(player.y - berry.y);
    if (x < player.width && y < player.height) {
      player.points += 1;
      //console.log("points:" + player.points);
      if(player.points%10==0){
       // console.log("kymmenen:");
       // addEnemies(1);
       // drawEnemies;
      }
      return true;
    }
  };

  var checkEnemy = function() {
    var x = Math.abs(player.x - enemy.x);
    var y = Math.abs(player.y - enemy.y);
    if (x < player.width && y < player.height) {
     /* context.fillText("Game Over",10,50)*/
      player.elamat -= 1;
      //console.log("elamat" + elamat);
      return true;
    }
  };

    var checkBounds = function() {
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
    if (checkCollision()) {
      berry.x = Math.round(Math.random() * 390);
      berry.y = Math.round(Math.random() * 390);
    }
    
  };
var changeS = function(upOdown) {
  if(upOdown== "up"){
  player.speed +=0.2
  //console.log("speed:" +player.speed)
} else if(upOdown== "down"){
  if(player.speed>0.2){
   player.speed -=0.2;
 }
   //console.log("speed:" + player.speed)
}
};
 
  var movePlayer = function(direction) {
    //liikkuu = true
    if (direction == "up") {
      player.y -= player.speed;
    } else if (direction == "down") {
      player.y += player.speed;
    }else if (direction == "left") {
      player.x -= player.speed;
    } else {
      player.x += player.speed;
    }
    checkBounds();
    //liikkuu = false
  };
