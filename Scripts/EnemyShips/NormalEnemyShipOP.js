class NormalEnemyShipOP extends BaseEnemyShipOP
{
  constructor(_objectPool)
  {
    super(_objectPool);
    for (let i = 0; i < this.shipCount; i++)     {
    	this.ships.push(new NormalEnemyShip(0, 0, 30, 3, 3, 'Sprites/enemyRed1.png', 'Sprites/spaceEffects_006Flipped.png'));
  	}
    //super.spawnShips();
  }
}