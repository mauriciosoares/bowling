export default function generateGameDataLayer(players) {
  return {
    players: generatePlayers(players),
    currentPlayer: 0
  };
}

function generatePlayers(players) {
  return players.map((player, index) => ({
    frames: getFrames(),
    name: player
  }));
}

function getFrames() {
  const FRAME_LENGTH = 10;
  return Array.apply(null, {length: FRAME_LENGTH})
    .map(() => ({
      isStrike: null,
      isSpare: null,
      points: []
    }));
}
