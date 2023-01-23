const http = require('http');

class HttpClient {
    constructor(url) {
        this.url = url;
    }

    makeRequest() {
        return new Promise((resolve, reject) => {
            http.get(this.url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        });
    }
}

const run = async () => {
    const url = process.argv[2];

    const fetch = new HttpClient(url);
    try {
        const data = await fetch.makeRequest();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

run();
