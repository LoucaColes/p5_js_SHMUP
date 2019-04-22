class Particle{
  constructor(_x, _y, _size) {
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.moveSpeed = 10;
    this.alive = false;
    this.tag = "Particle";
    this.dirX = 0;
    this.dirY = 0;
    this.lifeTime = 0;
    this.colourFade = false;
    this.fadeSpeed = 0;
    this.sizeChange = 0;
  }

  reset(_x = 0, _y = 0)
  {
    this.x = _x;
    this.y = _y;
    this.alive = false;
    this.dirX = 0;
    this.dirY = 0;
  }
  
  spawn(_x, _y, _size, _dirX, _dirY, _moveSpeed,
         _lifeTime, _colour, _colourFade, _fadeSpeed,
         _sizeChange)
  {
    this.x = _x;
    this.y = _y;
    this.alive = true;
    this.size = _size;
    this.moveSpeed = _moveSpeed;
    this.dirX = _dirX;
    this.dirY = _dirY;
    this.lifeTime = _lifeTime;
    this.colour = _colour;
    this.colourFade = _colourFade;
    this.fadeSpeed = _fadeSpeed;
    this.sizeChange = _sizeChange;
  }
  
  move() {
    if (this.alive)
    {
			this.x += this.dirX * this.moveSpeed;
      this.y += this.dirY * this.moveSpeed;
      this.lifeTime -= 0.1;
      
      if (this.sizeChange != 0)
      {
        this.size += this.sizeChange;
      }
      
      if (this.colourFade)
      {
        let r = red(this.colour);
        let g = green(this.colour);
        let b = blue(this.colour);
        let a = alpha(this.colour);
        a -= this.fadeSpeed;
        this.colour = color(r, g, b, a);
      }
      
      if (this.lifeTime < 0)
      {
        this.alive = false;
      }
    }
  }

  display(debug = false)
  {
    if (this.alive)
    {
      noStroke();
      fill(this.colour);
      ellipse(this.x, this.y, this.size, this.size);
    }
  }
  
  IsAlive()
  {
    return this.alive;
  }
}