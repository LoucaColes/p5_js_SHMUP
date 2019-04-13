class Ship{
  constructor(_x, _y, _objectPool, _width, _height) {
    this.x = _x;
    this.y = _y;
    this.size = 30;
    this.moveSpeed = 10;
    this.bulletObjectPool = _objectPool;
    this.xBounds = _width;
    this.yBounds = _height;
    this.bulletOffset = this.size;
    this.fireRate = 0.2;
    this.fireTimer = 0;
    this.tag = "Player";
    this.alive = true;
    this.sprite = loadImage('Sprites/playerShip3_blue.png');    
  }

  move() {
    if (this.x > 0 && this.x < this.xBounds)
    {
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x -= this.moveSpeed;
      }

      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x += this.moveSpeed;
      }
  	}
    else if (this.x <= 0)
    {
      this.x  = 0.1;
    }
    else if (this.x >= this.xBounds)
    {
  		this.x = this.xBounds - 0.1; 
    }
    
    if (this.y > 0 && this.y < this.yBounds)
    {
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y -= this.moveSpeed;
      }

      if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y += this.moveSpeed;
      }
    }
    else if (this.y <= 0)
    {
      this.y  = 0.1;
    }
    else if (this.y >= this.yBounds)
    {
  		this.y = this.yBounds - 0.1; 
    }
    
    this.fireTimer -= 0.01;
    if (keyIsDown(32) && this.fireTimer <= 0)
    {
      this.fire();
      this.fireTimer = this.fireRate;
    }
  }
  
  fire() {
    print("Fire");
      this.bulletObjectPool.spawn(this.x, this.y - this.bulletOffset);
    
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
  
  /*display(debug = false) {
    fill(255);
    stroke(255);
    triangle(this.x - this.size, this.y + this.size,
             this.x, this.y - this.size,
             this.x + this.size, this.y + this.size);
    if (debug)
    {
      stroke(0, 255, 0)
      triangle(this.x - this.size, this.y + this.size,
             this.x, this.y - this.size,
             this.x + this.size, this.y + this.size);
    }
    stroke(255);
  }*/
  
  IsAlive()
  {
    return this.alive;
  }
  
  respawn(_x, _y)
  {
    this.x = _x;
    this.y = _y;
    this.alive = true;
  }
}