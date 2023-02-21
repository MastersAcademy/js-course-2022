// to start code use this url in the command line https://jsonplaceholder.typicode.com/todos/1

class User {
    constructor(args) {
        Object.keys(args)
            .forEach((key) => {
                this[key] = args[key];
            });
    }

    try() {
        console.log(this);
    }
}

const nodePath = process.argv[2];
fetch(nodePath)
    .then((response) => response.json())
    .then((json) => {
        const user1 = new User(json);
        user1.try();
    });
