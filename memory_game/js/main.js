var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne;
var cardTwo;
cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log('user flipped ' + cardsInPlay[0]);
cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log('user flipped ' + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert("Sorry, try again.");
	}
} else {
	console.log('pick another card');
}