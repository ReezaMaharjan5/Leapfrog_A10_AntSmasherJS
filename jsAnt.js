class BallGenerate {
    constructor() {
      this.mainContainer = document.getElementById("main-container");
      this.balls = [];
    }
    
    //the funtions calling other functions to display ant and for collision
    init() {
      this.storeBalls();
      this.createBalls();
      this.collision();
    }
    
  
    //Creating ball object
    storeBall() {
      let ball = {};
      ball.x = Math.floor(Math.random() * (this.mainContainer.offsetWidth - 40 + 1));
      ball.y = Math.floor(Math.random() * (this.mainContainer.offsetHeight- 40 +1));
      ball.dx = Math.random();
      ball.dy = Math.random();
      return ball;
    }
    //Creating balls array containing ball object
    storeBalls() {
      var numAnt =20;
      for (let i = 0; i < numAnt; i++) {
        const ball = this.storeBall();
        this.balls.push(ball);
      }
    }
    //Display ants in the screen
    createBalls() {
        for (const ball of this.balls) {
          this.drawBall(ball.x, ball.y);
          setInterval(() => {
            this.moveBall(ball);
            },10);
        }
      }
    //funtion to draw the circles for ant in the background
    drawBall(x, y) {
      const ball_el = document.createElement("div");//Creating a div for balls
      ball_el.classList.add("ball");
      ball_el.style.left = x + "px";
      ball_el.style.bottom = y + "px"; 

      ball_el.addEventListener("click", () => this.killAnt(ball));
      // ball_el.addEventListener("click", killAnt(ball));

      // ball_el.addEventListener("click", console.log(1));

      this.mainContainer.appendChild(ball_el);
    }
    
    killAnt(){
      const ball_el = document.querySelector(".ball");
      if (ball_el){
        this.mainContainer.removeChild(ball_el);
        const ballIndex = this.balls.indexOf(ball);
        if (ballIndex > - 1){
          this.balls.splice(ballIndex, 1);
          antsCount++;
          scoreBoard();
        }
      }
    }


      scoreBoard() {
        const scoreUpdate = document.getElementById("scoreBox");
        scoreUpdate.innerHTML = `Score : ${antsCount}`;
      }


    
    //funtion to move the ants
    moveBall(ball) {
        ball.x = ball.x + ball.dx;
        ball.y = ball.y + ball.dy;
         //remove the consecutive previous ant after transition 
        this.mainContainer.removeChild(document.querySelector(".ball"));//To remove the previous ball
        this.drawBall(ball.x, ball.y);
        //to Check the collision between the ants
        this.collision();
        //condition for the ants to bounce back to the walls of the box
        if (ball.x+ 50> this.mainContainer.offsetWidth || ball.x < 0) {
          ball.dx *= -1;
        }
        if (ball.y+ 50>this.mainContainer.offsetHeight || ball.y < 0) {
          ball.dy *= -1;
        }
        
      }
    

    //check the distance between one ant and every remaining ants and bounce back
    collision() {
      for (let i = 0; i < this.balls.length; i++) {
        for (let j = i + 1; j < this.balls.length; j++) {
          const ball1 = this.balls[i];
          const ball2 = this.balls[j];
        
          const dx = ball2.x - ball1.x;
          const dy = ball2.y - ball1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
        
          if (distance < 40) { 
            // Reverse the direction of both ants after collision
            ball1.dx *= -1;
            ball1.dy *= -1;
            ball2.dx *= -1;
            ball2.dy *= -1;
          }
        }
      }
    }

    
    
  }
     
  const show = new BallGenerate();
  show.init();



//   show.onclick="killAnt()";

// killAnt(){
//   var clickCount = 0;
//   if (){
//     clickCount += 1;
//   }
// }




































