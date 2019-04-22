class NormalEnemyShip extends EnemyShip{
  constructor(_x, _y, _size, _horMoveSpeed, _vertMoveSpeed, _spritePath, _trailPath) {
    super(_x, _y, _size, _horMoveSpeed, _vertMoveSpeed,
          _spritePath, _trailPath);
    
    this.a = 0;
  }
  
  move() {
    super.move();
    
    this.x += (sin(this.a) * (this.horMoveSpeed * 3));

    this.a += 0.1;
    
    if (this.a > 360)
    {
      this.a = -360;
    }
    
  }
}