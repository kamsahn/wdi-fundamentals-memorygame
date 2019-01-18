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
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
		} else {
			alert("Sorry, try again.");
		}
	} else {
	console.log('pick another card');
	}
};
var flipCard = function(cardId) {
	console.log('A card has been flipped.')
	cardsInPlay.push(cards[cardId].rank);
	console.log('user flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
};

flipCard(0);
flipCard(2);




