
let makeDeck = () => {
	return{
	deck : [],
	drawncard:[],
	suits : ['hearts', 'diamonds', 'spades', 'clubs'],
	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	initCard(){
		let {suits, values,deck} = this;
		for(let suit of suits){
			for(let value of values.split(',')){
				deck.push({suit, value});
			}
		}
	},
	drawCard(){
		let {deck, drawncard}= this;
		let card = deck.pop();
		drawncard.push(card);
		return card;
	},
	drawMultipleCard(num){
		let see = [];
		for(let i=0;i<num;i++){
			see.push(this.drawCard());
		}
		return see;
	},
	shuffle(){
		let {deck}=this;
		for(let i=deck.length-1;i>0;i--){
			let j = Math.floor(Math.random()*(i+1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
			}
		},
	drawing(){
		//arrow function doesnt affect the current 'this', if use normal function, 'this' will refer to window because setInterval is window function
		this.timerId = setInterval(()=>{
			this.drawCard();
		},3000)
	},
	stop(){
		clearInterval(this.timerId);
	}
}
}

const myDeck = makeDeck();
myDeck.initCard();
myDeck.shuffle();
const h1 = myDeck.drawMultipleCard(2);
const h2 = myDeck.drawMultipleCard(2);
const h3 = myDeck.drawMultipleCard(5);

// OUR SECOND DECK!
const deck2 = makeDeck();
deck2.initCard();