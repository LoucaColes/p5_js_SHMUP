class EnemyShip{
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.size = 30;
    this.moveSpeed = 3;
    this.a = 0;
    this.alive = false;
    this.tag = "Enemy";
    this.sprite = loadImage('Sprites/enemyRed1.png');
  }

  reset(_x = 0, _y = 0)
  {
    this.x = _x;
    this.y = _y;
    this.alive = false;
  }
  
  spawn(_x, _y)
  {
    this.x = _x;
    this.y = _y;
    this.alive = true;
  }
  
  move() {
    this.x += (sin(this.a) * (this.moveSpeed * 3));
    this.y += this.moveSpeed;
    this.a += 0.1;
    if (this.a > 360)
    {
      this.a = -360;
    }
    
    if (this.y > 600)
    {
      this.alive = false; 
    }
  }

  display(debug = false)
  {
    imageMode(CENTER);
  	image(this.sprite, this.x, this.y, this.size, this.size); 
    if (debug)
    {
      stroke(0, 255, 0);
      noFill();
      rect(this.x - (this.size/2), this.y- (this.size/2), 
           this.size, this.size);
    }
  }
  
  getCenterY()
  {
  	return this.y + (this.size * 1.5);
  }
  
  IsAlive()
  {
    return this.alive;
  }
}