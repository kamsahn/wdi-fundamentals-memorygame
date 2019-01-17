var cards = ['queen', 'queen', 'king', 'king'];
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
	cardsInPlay.push(cards[cardId]);
	console.log('user flipped ' + cardsInPlay[0]);
	checkForMatch();
};

flipCard(0);
flipCard(2);




