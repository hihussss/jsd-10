import GameSaving from "../class/gamesavingasync";


test('Async test',() => {
    const game = new GameSaving();
    return game.load().then(data => {
        expect(data).toEqual(data);
    })
    
})