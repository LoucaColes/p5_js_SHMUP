class FastEnemyShipOP extends BaseEnemyShipOP
{
  constructor(_objectPool)
  {
    super(_objectPool);
    for (let i = 0; i < this.shipCount; i++)     {
    	this.ships.push(new FastEnemyShip(0, 0, 30, 3, 6, 'Sprites/enemyRed2.png', 'Sprites/spaceEffects_006Flipped.png'));
  	}
    //super.spawnShips();
  }
}