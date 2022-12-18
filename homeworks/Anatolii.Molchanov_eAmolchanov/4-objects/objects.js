const tamagochi = {
  health: 5,
  happiness: 5,
  satiety: 3,
  helthUp() {
    this.health++;
  },
  helthDown() {
    this.health--;
  },
  happinessUp() {
    this.happiness++;
  },
  happinessDown() {
    this.happiness--;
  },
  satietyUp() {
    this.satiety++;
  },
  satietyDown() {
    this.satiety--;
  },
  play() {
    this.helthDown();
    this.satietyDown();
    this.happinessDown();

    if (!this.health || !this.happiness || !this.satiety) {
      console.log('Game over');
    }
  },
};


tamagochi.play();
tamagochi.play();
tamagochi.play();
