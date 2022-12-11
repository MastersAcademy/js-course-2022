const volumeOneTankLiquid = 1;
const oilWeight = 926;
const waterWeight = 1000;
const mercuryWeight = 1355;

const oilTankCount = 3;
const waterTankCount = 5;
const mercuryTankCount = 2;

const totalWeightLiquid = oilWeight * oilTankCount + waterWeight * waterTankCount + mercuryWeight * mercuryTankCount;

const getWeight = (weight, liquid, count) => {
    return weight * liquid * count;
};

console.log(getWeight(volumeOneTankLiquid, oilWeight, oilTankCount));
console.log(getWeight(volumeOneTankLiquid, waterWeight, waterTankCount));
console.log(getWeight(volumeOneTankLiquid, mercuryWeight, mercuryTankCount));
console.log(totalWeightLiquid);
