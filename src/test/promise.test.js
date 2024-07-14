import GameSavingLoader from "../class/gamesaving";



test('Promise test', () => {
    const game = new GameSavingLoader();
    return game.load().then(data => {
        expect(data).toEqual(data);
    })
    
})