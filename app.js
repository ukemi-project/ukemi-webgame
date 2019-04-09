import Deck from './components/Deck';

const suits = [ 'movement', 'condition', 'wildcard' ],
  game = {};

suits.forEach( ( suit ) => {
  const cardList = require( `./json/${suit}.json` );

  game[ suit ] = new Deck( suit, cardList );
} );

setTimeout( () => {}, 300000000 );
