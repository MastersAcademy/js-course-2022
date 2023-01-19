const http = require('http');

class GoToSite {
    constructor(rout) {
        this.rout = rout;
    }

    convertRoutString() {
        return this.rout.slice(7);
    }

    getRequest() {
        return http.request({
            hostname: this.convertRoutString(),
        },
        (res) => {
            let data = '';
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', () => {
                console.log(data);
            });
        }).on('error', console.error).end();
    }
}
if (process.argv.length === 2) {
    console.log('Expected argument with url. Try again. I.E. node script.js \'https://www.google.com\'');
} else {
    const goToGoogle = new GoToSite(process.argv[2]);
    console.log(goToGoogle.getRequest());
}
