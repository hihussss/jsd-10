import read from '../reader.js';
import json from '../parser.js';

export default class GameSavingLoader {
     load() {
        return new Promise((resolve, ) => {
          read()
          .then(data => json(data))
          .then(data => resolve(data));
        })
     }


}        