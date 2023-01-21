const https = require('https');

class SocialProductsService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com';
    }

    get(path) {
        return https
            .get(this.url + path, (res) => {
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

    post(path, { title = 'custom', body = 'Lorem...', userId = 80 }) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            timeout: 1000,
        };
        return new Promise((reject) => {
            const req = https.request(this.url + path, options, (res) => {
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

    delete(path, id) {
        const options = {
            method: 'DELETE',
        };
        const req = https.request(`${this.url}${path}/${id}`, options, (res) => {
            console.log(res);
            console.log(`statusCode: ${res.statusCode}`);
            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });
        req.end();
    }
}
const socialProducts = new SocialProductsService();
socialProducts.get('/todos');
socialProducts.post('/posts', { body: 'LLLLLLL' });
socialProducts.delete('/posts', 1);
