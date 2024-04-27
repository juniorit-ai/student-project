const http = require('http');

async function getData() {
    try {
        const url = 'http://jsonplaceholder.typicode.com/users/1';

        const dataPromise = new Promise((resolve, reject) => {
            const req = http.get(url, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            });

            req.on('error', (error) => {
                reject(error);
            });
        });

        const data = await dataPromise;
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();