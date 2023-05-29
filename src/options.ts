//Options
export default {
	money: 100000,
	txtSpin: 'SPIN',
	txtAutoSpin: 'AUTO',
	txtAuto : 5,
	moneyWin: 0,
	txtMaxBet: 'MAXBET',
	coin: 10,
	txtCoin: 'COIN',
	line: 1,
	txtLine: 'LINES',
	txtInfo: 'INFO',
	win: 0,
	lineArray: [],
	result: [],
	winningLines : [],
	i: 0,
	hsv: [],
	winningRate: 100, //Set winning rate
	symbolNum: 0,	//set value of table1
	symbolNum1: 0,
	symbolNum2: 0,
	symbolNums1: [], 	//set value array of table1
	symbolNums2: [],	//set value array of table1
	//get random value
	getSymbolNum: function() {
		this.symbolNum = Phaser.Math.Between(0, 9);
		return this.symbolNum;
	},
	//get random value excepting specific value
	getRandomNumberExcluding: function(min: any, max: any, excluded: any) {
		let num;
		do {
		  num = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (num === excluded);
		return num;
	},
	//get value array of table1
	getArry1: function(num: any, rate: any) {
		this.symbolNums1 = [];
		for(var i = 0; i < 1000; i ++) {
			if(i < Math.round(rate * 10))
				this.symbolNums1.push(num);
			else this.symbolNums1.push(this.getRandomNumberExcluding(0, 9, num));
		}
		for (var i = 1000 - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			[this.symbolNums1[i], this.symbolNums1[j]] = [this.symbolNums1[j], this.symbolNums1[i]];
		}
	},
	//get value array of table2
	getArry2: function(num: any, rate: any) {
		this.symbolNums2 = [];
		for(var i = 0; i < 1000; i ++) {
			if(i < Math.round(rate * 10))
				this.symbolNums2.push(num);
			else this.symbolNums2.push(this.getRandomNumberExcluding(0, 9, num));
		}
		for (var i = 1000 - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			[this.symbolNums1[i], this.symbolNums1[j]] = [this.symbolNums1[j], this.symbolNums1[i]];
		} 
	},
	//get value of table1
	getSymbolNum1: function() {
		this.getArry1(this.symbolNum, this.winningRate);
		if(this.winningRate == 100) {
			this.symbolNum1 = this.symbolNum;
		}
		else if(this.winningRate == 0) {
			this.symbolNum1 = this.getRandomNumberExcluding(0, 9, this.symbolNum);
		}
		else {
			this.symbolNum1 = this.symbolNums1[Phaser.Math.Between(0, 1000)];
		}
	},
	//get value of table2
	getSymbolNum2: function() {
		if(this.symbolNum == this.symbolNum1) {
			this.symbolNum2 = this.symbolNum;
		}
		else {
			this.symbolNum2 = this.getRandomNumberExcluding(0, 9, this.symbolNum1);
		}
	},
	
	//values symbols0 ==> symbols9
	payvalues: [
		[100, 150, 200],
		[50, 100, 150],
		[25, 50, 100],
		[25, 50, 100],
		[15, 25, 50],
		[10, 20, 35],
		[10, 15, 25],
		[10, 15, 20],
		[5, 10, 20],
		[3, 8, 18]
	],
	//max payline 20
	payLines: [
		[[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]], //line 1
		[[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], //line 2
		[[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]], //line 3
		[[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]], //line 4
		[[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]], //line 5
		[[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]], //line 6
		[[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]], //line 7
		[[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]], //line 8
		[[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]], //line 9
		[[0, 1], [1, 2], [2, 1], [3, 0], [4, 1]], //line 10
		[[0, 1], [1, 0], [2, 1], [3, 2], [4, 1]], //line 11
		[[0, 0], [1, 1], [2, 1], [3, 1], [4, 0]], //line 12
		[[0, 2], [1, 1], [2, 1], [3, 1], [4, 2]], //line 13
		[[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]], //line 14
		[[0, 2], [1, 1], [2, 2], [3, 1], [4, 2]], //line 15
		[[0, 1], [1, 1], [2, 0], [3, 1], [4, 1]], //line 16
		[[0, 1], [1, 1], [2, 2], [3, 1], [4, 1]], //line 17
		[[0, 0], [1, 0], [2, 2], [3, 0], [4, 0]], //line 18
		[[0, 2], [1, 2], [2, 0], [3, 2], [4, 2]], //line 19
		[[0, 0], [1, 2], [2, 2], [3, 2], [4, 0]] //line 20
	],
	checkClick: false,
	symbolHeight: 150,
	duration: 100,
	repeat: [5, 10, 15, 20, 25],
};