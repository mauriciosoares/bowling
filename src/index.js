import generateDataLayer from './utils/generate-data-layer';
import Score from './components/score';

let data = generateDataLayer(['Mauricio', 'Igor']);

const score = new Score(data);
score.start('#score');
