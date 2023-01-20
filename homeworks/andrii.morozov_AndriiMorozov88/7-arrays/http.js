// const myUrl = 'https://jsonplaceholder.typicode.com/posts';
const myUrl = process.argv[2];
class HTTP {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const response = await fetch(this.url);
        const data = await response.json();
        console.log(data);
    }
}
const json = new HTTP(myUrl);
json.getData();
