(() => {
    const OIL = 'oil';
    const WATER = 'water';
    const MERCURY = 'mercury';
    const OIL_WEIGHT = 926;
    const WATER_WEIGHT = 1000;
    const MERCURY_WEIGHT = 1355;
    const oilCars = 3;
    const waterCars = 5;
    const mercuryCars = 2;
    const getWeight = (liquid, count) => {
        if (liquid === OIL) {
            return OIL_WEIGHT * count;
        }
        if (liquid === WATER) {
            return WATER_WEIGHT * count;
        }
        return MERCURY_WEIGHT * count;
    };
    console.log(
        getWeight(OIL, oilCars)
        + getWeight(WATER, waterCars)
        + getWeight(MERCURY, mercuryCars),
    );
})();
