class BossEnemyShip extends EnemyShip{
  constructor(_x, _y, _size, _horMoveSpeed, _vertMoveSpeed, _spritePath, _trailPath) {
    super(_x, _y, _size, _horMoveSpeed, _vertMoveSpeed,
          _spritePath, _trailPath);
    this.health = 3;
  }

  display()
  {
    super.display();
    if (this.health > 0)
    {
      stroke('#000000');
      fill('#ff0000');
      rectMode(CENTER);
      rect(this.x, this.y - 50, this.health * 20, 7.5, 20);
    }
  }
  
  spawn(_x, _y)
  {
    super.spawn(_x, _y);
    this.health = 3;
  }
  
  reset(_x = 0, _y = 0)
  {
    super.reset(0, 0);
    this.health = 3;
  }
}