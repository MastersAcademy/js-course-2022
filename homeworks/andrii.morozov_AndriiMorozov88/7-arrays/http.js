// const myUrl = 'https://jsonplaceholder.typicode.com/posts';
const https = require('https');

let body = '';

const myUrl = process.argv[2];
class HTTP {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        https.get(this.url, (res) => this.fetchContent(res));
    }

    fetchContent(res) {
        res.on('data', (data) => this.createContent(data));
        res.on('end', () => this.showContent(body));
    }

    createContent(data) {
        body += data;
    }

    showContent(content) {
        console.log(content);
    }
}
const json = new HTTP(myUrl);
json.getData();
