class Dimensions {
    constructor(height, width, length) {
        this.setHeigth(height);
        this.setwidth(width);
        this.setLength(length);
    }

    setHeigth(height) {
        this.height = height;
    }

    setwidth(width) {
        this.width = width;
    }

    setLength(length) {
        this.length = length;
    }
}

module.exports = Dimensions;
