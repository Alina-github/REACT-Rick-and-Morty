class fetchClass {
    constructor(options) {
        this.url = options.url;
        this.body = options.body;
        this.method = options.method;
    }

    getData() {
        const headers = {
            'Content-Type': 'application/json'
        }
        return fetch(this.url, {
            method: this.method,
            body: (this.method === "POST") ? JSON.stringify(this.body) : undefined,
            headers: headers
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('oops')
                }
                return res.json()
            })
    }
}
export {fetchClass}