class EnemyShip{
  constructor(_x, _y, _size, _horMoveSpeed, _vertMoveSpeed, _spritePath, _trailPath) {
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.horMoveSpeed = _horMoveSpeed;
    this.vertMoveSpeed = _vertMoveSpeed;
    this.alive = false;
    this.tag = "Enemy";
    this.sprite = loadImage(_spritePath);
    this.tailSprite = loadImage(_trailPath);
    this.health = 1;
  }

  reset(_x = 0, _y = 0)
  {
    this.x = _x;
    this.y = _y;
    this.alive = false;
    this.health = 1;
  }
  
  spawn(_x, _y)
  {
    this.x = _x;
    this.y = _y;
    this.alive = true;
  }
  
  move() {
    this.y += this.vertMoveSpeed;
    
    if (this.y > 600)
    {
      this.alive = false; 
    }
  }

  display(debug = false)
  {
    imageMode(CENTER);
  	image(this.sprite, this.x, this.y, this.size, this.size);
    image(this.tailSprite, this.x, this.y - 25, this.size/3, this.size);
    
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
  
  TakeDamage(_amount)
  {
    this.health -= _amount;
    if (this.health <= 0)
    {
      this.alive = false;
    }
  }
}