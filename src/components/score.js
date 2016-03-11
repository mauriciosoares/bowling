import Player from './player';

export default class Score {
  constructor(data) {
    this.data = data;
    this.players = data.players.map(player => new Player(player));
  }

  start(container) {
    this.container = document.querySelector(container);
    this.render();
  }

  render() {
    this.players.forEach(player => player.render(this.container));
  }
}
