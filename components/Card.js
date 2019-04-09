export default class Card {
  constructor( suit, name ) {
    this.name = name || 'blank';
    this.image = `./images/${suit}/${name}.jpg` || '';
    this.drawn = false;
  }
}
