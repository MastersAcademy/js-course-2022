const receivedURL = process.argv[2];

class ReceivedData {
    constructor(url) {
        this.url = url;
    }

    async dataTransformation() {
        const response = await fetch(this.url);
        const date = await response.json();
        return console.log(date);
    }
}

const dataOutput = new ReceivedData(receivedURL);

dataOutput.dataTransformation();
