
import GameSavingLoader from './class/gamesaving.js';
import GameSaving from './class/gamesavingasync.js';



const gamesaving = new GameSavingLoader();
gamesaving.load().then(rezult => console.log(rezult))

const save = new GameSaving();
save.load().then(rezult => console.log(rezult))