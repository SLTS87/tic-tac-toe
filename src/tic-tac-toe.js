class TicTacToe 
{
    constructor() 
	{
		this.turnCounter = 0;
		this.turns = new Array(3);
		
		for (var i = 0; i < this.turns.length; i++)
		{
			this.turns[i] = new Array(3);
		}
    }

    getCurrentPlayerSymbol() 
	{
		if (this.turnCounter % 2 == 0)
		{
			return 'x';
		}
		else
		{
			return 'o';
		}
    }

    nextTurn(rowIndex, columnIndex) 
	{
		if(this.turns[rowIndex][columnIndex] == undefined)
		{
			this.turns[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
			
			this.turnCounter++;
		}
	}

    isFinished() 
	{
		if(this.getWinner() != null || this.isDraw() == true)
		{
			return true;
		}
		else
		{
			return false;
		}
    }

    getWinner() 
	{
		if(this.turnCounter < 5)
		{
			return null;
		}
		
		for (var i = 0; i < 3; i++)
		{
			if(this.turns[i][0] == this.turns[i][1] && this.turns[i][1] == this.turns[i][2] && this.turns[i][0] != undefined)
			{
				return this.turns[i][0];
			}
			
			if(this.turns[0][i] == this.turns[1][i] && this.turns[1][i] == this.turns[2][i] && this.turns[0][i] != undefined)
			{
				return this.turns[0][i];
			}
		}
		
		if(this.turns[0][0] == this.turns[1][1] && this.turns[1][1] == this.turns[2][2] && this.turns[1][1] != undefined)
		{
			return this.turns[1][1];
		}
		if(this.turns[2][0] == this.turns[1][1] && this.turns[1][1] == this.turns[0][2] && this.turns[1][1] != undefined)
		{
			return this.turns[1][1];
		}
		
		return null;
    }

    noMoreTurns() 
	{
		var flag = false;
		
		for (var i = 0; i < 3; i++)
		{
			for (var j = 0; j < 3; j++)
			{
				if(this.turns[i][j] == undefined)
				{
					flag = true;
				}
			}
		}
		
		if (!flag)
		{
			return true;
		}
		else
		{
			return false;
		}
    }

    isDraw() 
	{
		if (this.getWinner() == null && this.noMoreTurns())
		{
			return true;
		}
		else
		{
			return false;
		}
    }

    getFieldValue(rowIndex, colIndex) 
	{
		if (this.turns[rowIndex][colIndex] == undefined)
		{
			return null;
		}
		else 
		{
			return this.turns[rowIndex][colIndex];
		}
		
		
    }
}

module.exports = TicTacToe;
