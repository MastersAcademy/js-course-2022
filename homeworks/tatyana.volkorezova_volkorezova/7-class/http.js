const https = require('https');

class GoToSite {
    constructor(url) {
        this.url = url;
    }

    getRequest() {
        return https
            .get(`${this.url}/todos`, (res) => {
                let data = '';
                res.on('data', (d) => {
                    data += d;
                });
                res.on('end', () => {
                    console.log(JSON.parse(data));
                });
            })
            .on('error', (err) => console.log('Error', err.message))
            .end();
    }

    postRequest() {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            timeout: 1000,
        };
        return new Promise((reject) => {
            const req = https.request(`${this.url}/posts`, options, (res) => {
                if (res.statusCode < 200 || res.statusCode > 299) {
                    return reject(new Error(`HTTP status code ${res.statusCode}`));
                }

                return res.on('data', (chunk) => process.stdout.write(chunk));
            });
            req.on('error', (err) => {
                console.log(err);
            });
            req.write(options.body);
            req.end();
        });
    }
}
if (process.argv.length === 2) {
    console.log('Error in call. I.E. node script.js \'https://jsonplaceholder.typicode.com\'');
} else {
    const goToSite = new GoToSite(process.argv[2]);
    goToSite.postRequest();
    console.log(goToSite.getRequest());
}
