function CreateObject(name){
    return {name: name,
        helthCount: 100,
        helthStr: 'Good',
        orderToNeed: {
        sleep: 100,
        eat: 100,
        drink: 100,
        rest: 100,
        play: 100,
    },
    sleep: function(duration) {
        this.orderToNeed.sleep += duration;
        this.orderToNeed.sleep = Math.min(100, this.orderToNeed.sleep);
        this.orderToNeed.rest += duration;
        this.orderToNeed.rest = Math.min(100, this.orderToNeed.rest);
        this.orderToNeed.drink -= 0.5 * duration;
        this.orderToNeed.eat -= 0.5 * duration;
        this.orderToNeed.play -= 0.5 * duration; 
    },
    eat: function(duration) {
        this.orderToNeed.eat += 10 * duration;
        this.orderToNeed.eat = Math.min(100,this.orderToNeed.eat);
        this.orderToNeed.sleep -= duration;
        this.orderToNeed.drink -= duration;
        this.orderToNeed.play -= duration; 
    },
    drink: function(duration) {
        this.orderToNeed.drink += 10 * duration;
        this.orderToNeed.drink = Math.min(100, this.orderToNeed.drink);
       
        this.orderToNeed.sleep -= duration;
        this.orderToNeed.drink -= duration;
        this.orderToNeed.play -= duration; 
    },
    rest: function(duration) {
        this.orderToNeed.rest += duration;
        this.orderToNeed.rest = Math.min(100, this.orderToNeed.rest);
       
        this.orderToNeed.sleep -= duration;
        this.orderToNeed.eat -= 0.5 * duration;
        this.orderToNeed.drink -= 0.5 * duration;
        this.orderToNeed.play -= duration;
    },
    play: function(duration) {
        this.orderToNeed.play += duration;
        this.orderToNeed.play = Math.min(100, this.orderToNeed.play);
       
        this.orderToNeed.sleep -= duration;
        this.orderToNeed.eat -= duration;
        this.orderToNeed.drink -= duration;
    },
    checkHelth: function(){
        let maxTotal = 0;
        let total = 0;
        for (let key in this.orderToNeed){
            maxTotal += 100;
            total += this.orderToNeed[key];
        };
        this.helthCount = Math.round(total/maxTotal*100);
        if (this.helthCount > 80) {
            this.helthStr = 'Perfect';
        }else if (this.helthCount > 40) {
            this.helthStr = 'Good';
        }else if (this.helthCount > 0) {
            this.helthStr = 'Bad'; 
        } else{
            this.helthStr = 'Dead';
        }
    }
};
}

let tamagochi = CreateObject('TomCat');
tamagochi.play(30);
tamagochi.play(20);
tamagochi.eat(10);
tamagochi.drink(5);
tamagochi.rest(30);
tamagochi.sleep(50);
tamagochi.eat(30);
tamagochi.drink(20);
tamagochi.checkHelth();

let tomaGochi = CreateObject('SheCat');
tomaGochi.play(20);
tomaGochi.eat(10);
tomaGochi.drink(5);
tomaGochi.checkHelth();

let sirko = Object.create(CreateObject('Sirko'));
sirko.colour = 'Red';
sirko.breed = 'mastiff';
sirko.play(50);
sirko.checkHelth();

console.log(tamagochi);
console.log(tomaGochi);
console.log(sirko.name,sirko.colour,sirko.helthStr);