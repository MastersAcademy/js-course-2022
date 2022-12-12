const getWeight = (tankVolume, liquid, count, density) => {
    const volumeOfLiquid = (liquid / density) * (tankVolume * count);
    return volumeOfLiquid;
};
console.log(getWeight(1000, 926, 3, 1000));
console.log(getWeight(1000, 1000, 5, 1000));
console.log(getWeight(1000, 1355, 2, 1000));
