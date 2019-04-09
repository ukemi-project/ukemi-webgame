import Card from '../components/Card';

export default class Deck {
  constructor( suit, cards ) {
    this.suit = suit;
    this.cards = [];

    cards.forEach( ( name ) => {
      this.cards.push( new Card( suit, name ) );
    } );
  }

  shuffle() {}

  deal() {}
}
