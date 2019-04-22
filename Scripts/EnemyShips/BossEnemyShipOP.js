class BossEnemyShipOP extends BaseEnemyShipOP
{
  constructor(_objectPool)
  {
    super(_objectPool);
    for (let i = 0; i < this.shipCount; i++)     {
    	this.ships.push(new BossEnemyShip(0, 0, 30, 3, 3, 'Sprites/enemyRed3.png', 'Sprites/spaceEffects_006Flipped.png'));
  	}
    //super.spawnShips();
  }
}