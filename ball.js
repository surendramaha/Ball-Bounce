const container = document.getElementById("container");
const clientWidth = container.clientWidth;
const clientHeight = container.clientHeight;
const numberOfBalls = 10;



class Ball {
    constructor(id){
        this.id = id;
        this.directionX = 1; //Initial position of ball//
        this.directionY = 1;
        this.speedX = 10; //Speed of ball moves horizontally//
        this.speedY = 10; //speed of ball moves vertically//
        this.width = this.randomPosition(100, 20);
        this.xposition = this.randomPosition(clientWidth - this.width, 0);
        this.yposition = this.randomPosition(clientHeight- this.width,0);
        // console.log(this.xposition, this.yposition);
       
        
        this.showBall();
        this.ballMovement();
        
    }
    randomPosition(max, min){
        return Math.floor(Math.random() * (max - min)) + min;
    }

showBall(){
    const ballDiv = document.createElement("div");
    ballDiv.id = this.id;
    ballDiv.classList.add("ball");
    ballDiv.style.width = `${this.width}px`;
    ballDiv.style.height = `${this.width}px`;
    ballDiv.style.top = `${this.yposition}px`;
    ballDiv.style.left = `${this.xposition}px`;
    container.appendChild(ballDiv);
    // console.log(ballDiv)
}
ballMovement() {
    const currentBall = document.getElementById(this.id);
  
    setInterval(() => {
      const currentBallX = parseInt(currentBall.style.left);
      const currentBallY = parseInt(currentBall.style.top);
      // console.log(currentBallX, currentBallY)

      if (currentBallX > clientWidth - this.width ) {
        this.directionX *= -1;
      }
    
      if (currentBallX <= 0) {
        this.directionX *= -1;
      }
      
      if (currentBallY > clientHeight - this.width ) {
        this.directionY *= -1;
      }
      
      if (currentBallY <= 0) {
        this.directionY *= -1;
      }

      const newPositionX = currentBallX + this.speedX * this.directionX;
      const newPositionY = currentBallY + this.speedY * this.directionY;
      // console.log(newPositionX, newPositionY)
      currentBall.style.left = newPositionX + "px";
      currentBall.style.top = newPositionY + "px";
    }, 1000 / 60);
  }
}
const balls = [];
for (i = 0; i < numberOfBalls; i++) {
  balls[i] = new Ball( i);
  
}

// console.log(balls)
