const consoleTextArray = process.argv;
let url = consoleTextArray[2];
if (!url) url = 'https://jsonplaceholder.typicode.com/users';

class HttpClient {
    constructor(http, method, body) {
        this.http = http;
        this.method = method;
        this.body = body;
    }

    createPromise() {
        if (this.method === 'POST') {
            return fetch(this.http, {
                method: this.method,
                body: JSON.stringify(this.body),
                headers: { 'Content-Type': 'application/json' },
            });
        }
        return fetch(this.http);
    }

    getResultJson() {
        return this.createPromise()
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return response.json().then((error) => {
                    const err = new Error('http invalid!');
                    err.data = error;
                    throw err;
                });
            })
            .then((data) => console.log(data))
            .catch((e) => {
                console.log('Error is:', e);
            });
    }

    getResultText() {
        return this.createPromise()
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                return response.text().then((error) => {
                    const err = new Error('http invalid!');
                    err.data = error;
                    throw err;
                });
            })
            .then((data) => console.log(data))
            .catch((e) => {
                console.log('Error is:', e);
            });
    }
}
const tamagotchi = {
    name: 'pet',
    health: 6,
    happiness: 4,
    satiety: 10,
    energy: 6,
};

const firstRequest = new HttpClient(url, 'GET', tamagotchi);
firstRequest.getResultJson();

const secondRequest = new HttpClient(url, 'POST', tamagotchi);
secondRequest.getResultJson();
