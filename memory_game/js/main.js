var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var matchMsg = 'You found a match!'
var noMatchMsg = 'Sorry, try again.'
var endDisplay = function(msg) {
	var endBox = document.createElement('div');
	var endBoxText = document.createTextNode(msg);
	endBox.appendChild(endBoxText);
	endBox.setAttribute('id', 'test');
	document.getElementById('game-board').appendChild(endBox);
};
var reloadPage = function() {
	window.location.reload();
};
var replayButton = function() {
	var newButton = document.createElement('button');
	var newButtonText = document.createTextNode('Replay?');
	newButton.appendChild(newButtonText);
	newButton.setAttribute('id', 'reset');
	newButton.addEventListener('click', reloadPage);
	document.getElementById('game-board').appendChild(newButton);
};
var checkForMatch = function(elem) {
	var index = elem.getAttribute('data-id');
	elem.setAttribute('src', cards[index].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			// alert('You found a match!');
			endDisplay(matchMsg);
			replayButton();
		} else {
			// alert("Sorry, try again.");
			endDisplay(noMatchMsg);
			replayButton();
		}
	}
};
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	if (this.getAttribute('flip') === "no" && cardsInPlay.length <= 2) { 
	//want to change "no" to false and "yes" to true
		console.log('A card has been flipped.')
		cardsInPlay.push(cards[cardId].rank);
		this.setAttribute('flip', "yes");
		console.log('user flipped ' + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		checkForMatch(this);
	}
};
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('flip', "no"); //change to false once solution has been identified
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};
var scrollWin = function(x, y) {
	window.scrollTo(x, y);
};
createBoard();
window.onload = function() {
 setTimeout (function () {
  scrollTo(0,0);
 }, 10);
}