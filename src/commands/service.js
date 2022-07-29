const https = require('https');

let request = https.get('http://localhost:8080/api/events', (res) => {
if (res.statusCode !== 200) {
console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
res.resume();
return;
}

let data ='';

res.on('data', (chunk) => {
data += chunk;
});

res.on('close', () => {
console.log('Retrieved all data');
console.log(JSON.parse(data));
});
});