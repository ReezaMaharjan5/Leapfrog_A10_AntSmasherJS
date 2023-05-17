


class ballGenerate {
    constructor(x, y, dx, dy){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }


drawBall=(x,y) => {
    const main_container=document.querySelector('.container');
    const ball_el = document.createElement('div');
    ball_el.classList.add("ball");
    ball_el.style.left = x + "px";
    ball_el.style.top = y + "px";
    console.log(ball_el);
    main_container.appendChild(ball_el);
};

moveBall = (x, y, dx, dy) => {
    const main_container =document.querySelector(".container");
    main_container.removeChild(document.querySelector(".ball"));
    if(this.x + 20 >= main_container.offsetWidth || this.x < 0){
        this.dx *= -1;
    }
    if(this.y + 20 >= main_container.offsetWidth || this.y < 0){
        this.dy *= -1;
    } 
    
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.drawBall(this.x,this.y);
};

init = () => {
    this.drawBall(this.x, this.y);
    setInterval(() => {
        this.moveBall(this.x, this.y, this.dx, this.dy);
    },50);
};
};



const ball = new ballGenerate(100, 100, 10, 5);

const ball1 = new ballGenerate(200, 200, 0, 10);
const ball2 = new ballGenerate(300, 300, 10, 0);

const ball3 = new ballGenerate(400, 400, 10, 4);

const ball4 = new ballGenerate(470, 100, 5, 15);





ball.init();
ball2.init();
ball1.init();
ball3.init();
ball4.init();


let x = Math.floor(Math.random()*470) + 1;
console.log(x);






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



























// class Employe{
//     constructor(name1,address){
//         this.name = name1;
//         this.address = address;
//     }
//     getName(){
//         console.log(this.address);
//     }
// }

// let employe1 = new Employe("reeza");
// employe1.getName(); 


// function Square(){}
//     Square.prototype.x = 10;
//     Square.prototype.y = 10;
//     Square.prototype.getArea = function(){
//         return this.x * this.y;
//     }
   
// var a1= new Square();
// console.log(a1.x);
// console.log(a1.y);
// console.log(a1.getArea);
// console.log(a1.function());


