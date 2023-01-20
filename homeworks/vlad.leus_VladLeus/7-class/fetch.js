class Request {
    constructor() {
        this.url = process.argv[2];
    }

    async makeRequest() {
        await fetch(this.url)
            .then(response => response.json())
            .then(json => {
                if (Object.keys(json).length === 0) {
                    console.log('Request failed, try again');
                } else {
                    console.log(`Request succeeded, result: `, json);
                }
            })
            .catch(() => console.log('Request failed, try again'));
    }
}

const request = new Request();
request.makeRequest();
