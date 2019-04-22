class HoneyMakerBee extends Bee {
  constructor (age) {
    super(age, age);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney () {
    this.honeyPot++;
  }
  giveHoney () {
    this.honeyPot--;
  }
};
