// const myUrl = 'https://jsonplaceholder.typicode.com/posts';
const https = require('https');

const myUrl = process.argv[2];
class HTTP {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        https.get(myUrl, (res) => {
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => console.log(body));
        });
    }
}
const json = new HTTP(myUrl);
json.getData();
