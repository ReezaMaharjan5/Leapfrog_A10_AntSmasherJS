//class to generate balls
class ballGenerate {
    constructor(x, y, dx, dy){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

//funtion to draw the balls
drawBall=(x,y) => {
    const main_container=document.querySelector('.container');
    const ball_el = document.createElement('div');
    ball_el.classList.add("ball");
    ball_el.style.left = x + "px";
    ball_el.style.top = y + "px";
    console.log(ball_el);
    main_container.appendChild(ball_el);
    var red = Math.floor(Math.random() * 200);
    var green = Math.floor(Math.random() * 200);
    var blue = Math.floor(Math.random() * 200);
    var randomColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    ball_el.style.background=randomColor;
};

//funtion to move the balls
moveBall = (x, y, dx, dy) => {
    const main_container =document.querySelector(".container");

    //remove the consecutive previous ball after transition 
    main_container.removeChild(document.querySelector(".ball"));

    //condition for the ball to bounce back to the walls of the box
    if(this.x +24 >= main_container.offsetWidth || this.x < 0){
        this.dx *= -1;
    }
    if(this.y +24 >= main_container.offsetWidth || this.y < 0){
        this.dy *= -1;
    } 
    
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.drawBall(this.x,this.y);
    this.collisionBall();
};

//call the funtions for the display and movement of the ball
init = () => {
    this.drawBall(this.x, this.y);
    setInterval(() => {
        this.moveBall(this.x, this.y, this.dx, this.dy);
    },60);
};
};

//for collision of moving balls
// collisionBall = () =>{
//         for (let j = 0; j < 40; j++) {
//           for (let k = k + 1; k < 40; k++) {
//             this.balls[k] = this.balls[j];
          
//             const dx = ball[k].x - ball[j].x;
//             const dy = ball[k].y - ball[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
          
//             if (distance < 20) { 
//               // Reverse the direction of both balls
//               ball.dx *= -1;
//               ball.dy *= -1;
//             }
//           }
//         }
//       }

        




//generating random variable for ball construction
for (let i = 0; i < 40; i++){
    let a = Math.floor(Math.random()*400) + 1;
    let b = Math.floor(Math.random()*400) + 1;
    let c = Math.floor(Math.random()*(20-15))+15;
    let d = Math.floor(Math.random()*(20-15))+15;
    const ball = new ballGenerate(a, b, c, d);
ball.init();
};


//un comment all for functional approach
// const drawBall=(x,y) => {
//     const main_container=document.querySelector('.container');
//     const ball_el = document.createElement('div');
//     ball_el.classList.add("ball");
//     ball_el.style.left = x + "px";
//     ball_el.style.top = y + "px";
//     console.log(ball_el);
//     main_container.appendChild(ball_el);
// }

// const moveBall = () => {
//     const main_container =document.querySelector(".container");
//     main_container.removeChild(document.querySelector(".ball"));
//     ball.x=ball.x + ball.dx;
//     ball.y=ball.y + ball.dy;
//     drawBall(ball.x,ball.y)
//     if(ball.x + 24 >= main_container.offsetWidth || ball.x < 0){
//         ball.dx *= -1;
//     }
//     if(ball.y + 22 >= main_container.offsetWidth || ball.y < 0){
//         ball.dy *= -1;
//     } 
// }

// //diagonal_left
//  const ball ={ x:100, y:100, dx:10, dy:10}
// //up
// //const ball ={ x:200, y:200, dx:0, dy:10}
// //side
// // const ball ={ x:300, y:300, dx:10, dy:0}
// //random
// // const ball ={ x:100, y:400, dx:10, dy:10}

// drawBall(ball.x,ball.y);
// setInterval(moveBall, 100);




































