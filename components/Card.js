export default class Card {
  constructor( deck, name ) {
    this.deck = deck;
    this.name = name || 'blank';
    this.image = `./images/${deck}/${name}.jpg` || '';

    if ( deck === 'movement' ) {
      this.color = 'yellow';
    } else if ( deck === 'condition' ) {
      this.color = 'blue';
    } else {
      this.color = 'orange';
    }
  }

  drawCard() {}

  list() {
    const el = document.createElement( 'li' );

    el.innerText = this.name;
    return el;
  }
}
