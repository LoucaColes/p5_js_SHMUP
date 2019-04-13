class Bullet{
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.sizeX = 7.2;
    this.sizeY = 30;
    this.moveSpeed = 10;
    this.alive = false;
    this.tag = "Bullet";
    this.sprite = loadImage('Sprites/laserBlue16.png');
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
    if (this.alive)
    {
			this.y -= this.moveSpeed;
      if (this.y < 0)
      {
        this.alive = false;
      }
    }
  }

  display(debug = false)
  {
    if (this.alive)
    {
      imageMode(CENTER);
      image(this.sprite, this.x, this.y, this.sizeX, this.sizeY);
      if (debug)
      {
        stroke(0, 255, 0);
        noFill();
        rect(this.x - (this.size/2), this.y- (this.size/2), 
             this.size, this.size);
      }
    }
  }
  
  IsAlive()
  {
    return this.alive;
  }
}