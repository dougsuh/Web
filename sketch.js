let balls = []; // 공 객체들을 담을 배열

function setup() {
  createCanvas(600, 400); // Processing의 size(600, 400) 대응
  
  // 4개의 공 객체 생성 (Class를 이용해 인스턴스화)
  balls[0] = new Ball(100, 100, 20);
  balls[1] = new Ball(200, 200, 30);
  balls[2] = new Ball(300, 300, 40);
  balls[3] = new Ball(400, 100, 50);
}

function draw() {
  background(220); // 배경색 설정
  
  // 배열에 담긴 모든 공을 화면에 그리고 움직이게 함
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}

// Ball 클래스 정의 (Processing의 class Ball { ... } 대응)
class Ball {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.speedX = random(-2, 2); // X축 이동 속도 (무작위)
    this.speedY = random(-2, 2); // Y축 이동 속도 (무작위)
  }

  // 공을 화면에 그리는 함수
  display() {
    stroke(0);
    fill(127, 100); // 반투명한 회색
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  // 공의 위치를 업데이트하고 벽에 부딪히면 튕기게 하는 함수
  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // 왼쪽 혹은 오른쪽 벽에 닿으면 방향 반전
    if (this.x > width - this.r || this.x < this.r) {
      this.speedX *= -1;
    }
    // 위쪽 혹은 아래쪽 벽에 닿으면 방향 반전
    if (this.y > height - this.r || this.y < this.r) {
      this.speedY *= -1;
    }
  }
}
