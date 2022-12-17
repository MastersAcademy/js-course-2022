const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please write the actions from the list (heal,play,feed) that you want to do with tamagotchi using the space separator. Example : heal play feed. Write it.. ', (answer) => {
    const userAnswer = answer || 'heal play feed';

    const re = /\s* \s*/;
    const yourActionsArray = userAnswer.split(re);

    const tamagochi = {
        health: 5,
        enjoy: 5,
        food: 5,
    };

    function healIt() {
        tamagochi.health += 3;
        if (tamagochi.health >= 10) tamagochi.health = 10;

        tamagochi.enjoy -= 1;
        if (tamagochi.enjoy <= 0) console.log('Opps. Your tamagochi died for lack of happiness');

        tamagochi.food -= 1;
        if (tamagochi.food <= 0) console.log('Opps. Your tamagochi died of hunger');
    }

    function playIt() {
        tamagochi.health -= 1;
        if (tamagochi.health <= 0) console.log('Opps. Your tamagochi died from lack of health');

        tamagochi.enjoy += 3;
        if (tamagochi.enjoy >= 10) tamagochi.enjoy = 10;

        tamagochi.food -= 1;
        if (tamagochi.food <= 0) console.log('Opps. Your tamagochi died of hunger');
    }

    function feedIt() {
        tamagochi.health -= 1;
        if (tamagochi.health <= 0) console.log('Opps. Your tamagochi died from lack of health');

        tamagochi.enjoy -= 1;
        if (tamagochi.enjoy <= 0) console.log('Opps. Your tamagochi died for lack of happiness');

        tamagochi.food += 3;
        if (tamagochi.food >= 10) tamagochi.food = 10;
    }

    yourActionsArray.forEach((element) => {
        switch (element) {
            case 'heal':
                healIt();
                break;
            case 'play':
                playIt();
                break;
            case 'feed':
                feedIt();
                break;
            default: console.log('Opps. Your actions do not correspond to the "Example : heal play feed."');
        }
    });

    console.log(tamagochi.health);
    console.log(tamagochi.enjoy);
    console.log(tamagochi.food);
    rl.close();
});
