class FetchData {
    constructor(url) {
        this.url = url;
    }

    async fetchData() {
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}

const fetchData = new FetchData(process.argv[2]);
fetchData.fetchData();
