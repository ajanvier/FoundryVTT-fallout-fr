Hooks.on('init', () => {
    if(game.babele !== undefined){
        game.babele.register({
            module: 'fallout-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});

Hooks.once('ready', async () => {
    await game.babele.loadTranslations();
});