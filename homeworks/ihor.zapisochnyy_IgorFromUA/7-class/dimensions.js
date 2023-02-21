class Dimensions {
    constructor(height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
    }

    toString() {
        return (`height: ${this.height} mm
                 width: ${this.width} mm
                 length: ${this.length} mm`);
    }
}

module.exports = Dimensions;
