const https = require('https');

class Request {
    constructor(url) {
        this.url = url;
    }

    makeRequest() {
        https.get(this.url, (res) => {
            res.on('data', (data) => {
                console.log(JSON.parse(data));
            });
        });
    }
}

const fetch = new Request(process.argv[2]);
fetch.makeRequest();
