// // const container = document.getElementById("container")
// // const numberofBalls = 10;

// // const clientHeight = document.body.clientHeight;
// // const clientWidth = document.body.clientWidth;

// // class ball {
// //     constructor(id){
// //         this.id = id;
// //         this.id = id;
// //         this.speedX = 10;
// //         this.speedY= 10;
// //         this.directionX = 1;
// //         this.directionY = 1;
// //         this.xposition = this.randomPosition(clientWidth,0);
// //         this.yposition = this.randomPosition(clientHeight-this.width,0);
// //         this.width = this.randomPosition(20, 5);

// //         this.showball();
// //         this.ballMovement();
// //         }
// //     randomPosition(max, min){
// //     return(Math.floor(Math.random()) * (max - min) + min);
// // }

// // showball(){   
// //     const ballDiv = `<div class="ball" style=
// //     "width: ${this.width}px;
// //     "height: ${this.width}px;
// //     "top: ${this.yposition}px;
// //     "left: ${this.xposition}px
// //      </div>`

// //     container.innerHTML = ballDiv;
// // }

// // ballMovement(){
// //     const currentball = docoument.getElementById(this.id)
// //     setInterval()=> {
// //         const currentballx = parseIn(currentball.style.left);
// //         const currentbally = parseIn(currentball.style.top);
        

// //         /************ Buttom side position*************/

// //         if(currentbally >= clientheight -this.width){
// //             this.directiony += -1;
// //         }

// //         /************ Top side Position***********/
// //         if(currentballx <=0) {
// //             this.directiony += -1;
// //         }

// //         /************ RIght side Position***********/
// //         if(currentballx >= clientwidth-this.width){
// //             this.dircectiony += -1
// //         }

// //         const newPositionx = currentballx + this.speedx * this.directionx;
// //         const newPositionY = currentballY + this.speedx * this.directiony;
// //         currentball.style.left = `${newpositionx}px`;
// //         currentball.style.top = `${newpositiony}px`;
// //     }, 1000 / 60);
// // }

// // const Ball = [];
// // for(let i=0; i<=numberofBalls; i++){
// // const ball= new Ball(i);
// // balls.push(ball);
// // }


// //SECOND TYPE******************

// // const container = document.getElementById("container");
// // const numberOfBalls = 10;

// // const clientHeight = document.body.clientHeight;
// // const clientWidth = document.body.clientWidth;

// // class Ball {
// //   constructor(id) {
// //     this.id = id;
// //     this.speedX = 10;
// //     this.speedY = 10;
// //     this.directionX = 1;
// //     this.directionY = 1;
// //     this.width = this.randomPosition(20, 5);
// //     this.xposition = this.randomPosition(clientWidth - this.width, 0);
// //     this.yposition = this.randomPosition(clientHeight - this.width, 0);

// //     this.showBall();
// //     this.ballMovement();
// //   }

// //   randomPosition(max, min) {
// //     return Math.floor(Math.random() * (max - min) + min);
// //   }

// //   showBall() {
// //     const ballDiv = document.createElement("div");
// //     ballDiv.classList.add("ball");
// //     ballDiv.style.width = `${this.width}px`;
// //     ballDiv.style.height = `${this.width}px`;
// //     ballDiv.style.top = `${this.yposition}px`;
// //     ballDiv.style.left = `${this.xposition}px`;
// //     container.appendChild(ballDiv);
// //   }

// //   ballMovement() {
// //     const currentBall = document.querySelector(".ball");
// //     setInterval(() => {
// //       const currentBallX = parseInt(currentBall.style.left);
// //       const currentBallY = parseInt(currentBall.style.top);

// //       if (currentBallY >= clientHeight - this.width) {
// //         this.directionY *= -1;
// //       }

// //       if (currentBallX <= 0) {
// //         this.directionX *= -1;
// //       }

// //       if (currentBallX >= clientWidth - this.width) {
// //         this.directionX *= -1;
// //       }

// //       const newPositionX = currentBallX + this.speedX * this.directionX;
// //       const newPositionY = currentBallY + this.speedY * this.directionY;
// //       currentBall.style.left = `${newPositionX}px`;
// //       currentBall.style.top = `${newPositionY}px`;
// //     }, 1000 / 60);
// //   }
// // }

// // const balls = [];
// // for (let i = 0; i < numberOfBalls; i++) {
// //   const ball = new Ball(i);
// //   balls.push(ball);
// // }




// /*BISHAL CODE******************/

// const container = document.getElementById("container");
// const numberOfBalls = parseInt(prompt("Numbers  of Balls"));
// const clientHeight = container.clientHeight;
// const clientWidth = container.clientWidth;
// class Ball {
//   constructor(id) {
//     this.id = id;
//     this.speedX = 5;
//     this.speedY = 5;
//     this.directionX = 1;
//     this.directionY = 1;
//     this.color = this.randomColor();
//     this.diameter = this.randomPosition(100, 5);
//     this.xPosition = this.randomPosition(clientWidth - this.diameter, 0);
//     this.yposition = this.randomPosition(clientHeight - this.diameter, 0);
//     this.showBall();
//     this.ballMovement();
//   }
//   randomPosition(max, min) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   randomColor() {
//     // Generate random values for red, green, and blue components
//     const red = Math.floor(Math.random() * 256); // 0 to 255
//     const green = Math.floor(Math.random() * 256); // 0 to 255
//     const blue = Math.floor(Math.random() * 256); // 0 to 255
//     // Construct and return the RGB color string
//     const color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
//   }
//   showBall() {
//     const ballDiv = document.createElement("div");
//     // console.log(this.yposition);
//     // console.log(clientHeight, clientWidth)
//     ballDiv.id = this.id;
//     ballDiv.style.position = "absolute";
//     ballDiv.style.backgroundColor = `${this.color}`;
//     ballDiv.style.width = `${this.diameter}px`;
//     ballDiv.style.height = `${this.diameter}px`;
//     ballDiv.style.left = `${this.xPosition}px`;
//     ballDiv.style.top = `${this.yposition}px`;
//     ballDiv.style.borderRadius = "50%";
//     container.appendChild(ballDiv);
//   }
//   ballCollission(balls) {
//     const currentBall = document.getElementById(this.id);
//     const currentBallLeft = parseInt(currentBall.style.left);
//     const currentBallTop = parseInt(currentBall.style.top);
//     const currentBallRight = currentBallLeft + this.diameter;
//     const currentBallBottom = currentBallTop + this.diameter;
//     // console.log(currentBallRight, currentBallLeft)
//     for (const ball of balls) {
//       if (ball.id !== this.id) {
//         const otherBall = document.getElementById(ball.id);
//         const otherBallLeft = parseInt(otherBall.style.left);
//         const otherBallTop = parseInt(otherBall.style.top);
//         const otherBallRight = otherBallLeft + ball.diameter;
//         const otherBallBottom = otherBallTop + ball.diameter;
//         if (
//           currentBallLeft <= otherBallRight &&
//           currentBallRight >= otherBallLeft &&
//           currentBallTop <= otherBallBottom &&
//           currentBallBottom >= otherBallTop
//         ) {
//           // Collide with another ball, change direction
//           this.directionX *= -1;
//           this.directionY *= -1;
//         }
//       }
//     }
//   }
//   ballMovement() {
//     const currentBall = document.getElementById(this.id);
//     setInterval(() => {
//       const currentBallX = parseInt(currentBall.style.left);
//       const currentBallY = parseInt(currentBall.style.top);
//       // console.log(currentBallX,currentBallY)
//       //right Collission change direction
//       if (currentBallX > clientWidth - this.diameter ) {
//         this.directionX *= -1;
//       }
//       //Left collission Detection change direction
//       if (currentBallX <= 0) {
//         this.directionX *= -1;
//       }
//       // buttom collisssion dectection change direction
//       if (currentBallY > clientHeight - this.diameter ) {
//         this.directionY *= -1;
//       }
//       // buttom collisssion dectection change direction
//       if (currentBallY <= 0) {
//         this.directionY *= -1;
//       }
//       this.ballCollission(balls);
//       const newPositionX = currentBallX + this.speedX * this.directionX;
//       const newPositionY = currentBallY + this.speedY * this.directionY;
//       // console.log(currentBallX,newPositionX)
//       // console.log(newPositionX ,newPositionY )
//       //for the movement sideways and vertically
//       currentBall.style.left = newPositionX + "px";
//       currentBall.style.top = newPositionY + "px";
//     }, 1000 / 60);
//   }
// }
// const balls = [];
// for (i = 0; i < numberOfBalls; i++) {
//   balls[i] = new Ball(i);
// }







