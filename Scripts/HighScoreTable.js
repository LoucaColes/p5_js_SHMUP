class HighScoreTable
{
  constructor()
  {
    // Load the table
    this.tableFilePath = 'Data/HighscoreTable.csv';
    this.table = loadTable(this.tableFilePath, 'csv', 'header');   
  }
  
  // Check if the file is loaded by printing rows and columns
  CheckLoaded()
  {
    print(this.table.getRowCount() + ' total rows in table');
    print(this.table.getColumnCount() + ' total columns in table');
  }
  
  // Save table
  SaveTable()
  {
    //saveTable(this.table, this.tableFilePath);
  }
}