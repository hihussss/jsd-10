import read from '../reader.js';
import json from '../parser.js';

export default class GameSaving{

    async load() {
        try {
        let promise = new Promise((resolve, ) => {
          read()
          .then(data => json(data))
          .then(data => resolve(data));
        })
        const data = await promise
        return data
        } catch (error) {
        console.log("Что-то пошло не так")
        }
        
     }
}