/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const TicTacToe = __webpack_require__(1);
	
	window.game = new TicTacToe();
	
	resetBtn.addEventListener('click', () => {
	    window.game = new TicTacToe();
	    render();
	});
	
	function render() {
	    let html = '';
	
	    for (let i = 0; i < 3; i++) {
	        html += '<div class="row">';
	
	        for (let j = 0; j < 3; j++) {
	            html += `<div class="column">${game.getFieldValue(i, j) || ''}</div>`;
	        }
	
	        html += '</div>';
	    }
	
	    gameCanvas.innerHTML = html;
	}
	
	render();
	
	gameCanvas.addEventListener('click', e => {
	    if (!e.target.classList.contains('column')) {
	        return;
	    }
	
	    const rowIndex = Array.from(gameCanvas.children).indexOf(e.target.parentNode);
	    const colIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
	
	    game.nextTurn(rowIndex, colIndex);
	
	    const winner = game.getWinner();
	    const isDraw = game.isDraw();
	
	    render();
	
	    if (winner) {
	        setTimeout(() => {
	            alert(`${winner} won!`);
	            window.game = new TicTacToe();
	            render();
	        }, 10)
	    }
	
	    if (isDraw) {
	        setTimeout(() => {
	            alert(`It's a draw`);
	            window.game = new TicTacToe();
	            render();
	        }, 10);
	    }
	})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map