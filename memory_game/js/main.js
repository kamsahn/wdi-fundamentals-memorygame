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
var replayLink = function() {
	var newLink = document.createElement('a');
	var newLinkText = document.createTextNode('Replay?');
	newLink.appendChild(newLinkText);
	newLink.setAttribute('id', 'reset');
	newLink.setAttribute('href', "file:///C:/Users/samjk/fundamentals/wdi-fundamentals-memorygame/memory_game/index.html")
	document.getElementById('game-board').appendChild(newLink);
};
var checkForMatch = function(elem) {
	var index = elem.getAttribute('data-id');
	elem.setAttribute('src', cards[index].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
			replayLink();
		} else {
			alert("Sorry, try again.");
			replayLink();
		}
	} else {
	console.log('pick another card');
	}
};
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log('A card has been flipped.')
	cardsInPlay.push(cards[cardId].rank);
	console.log('user flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch(this);
};
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
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