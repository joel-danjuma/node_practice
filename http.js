const http = require('http')
const PORT = 5000;
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end("Hey there ! welcome to the home page");
    } else if (req.url === '/about'){
        res.end('Hi there, this is what we are about.');
    } else {
        res.end(`
    <h1> OOPS!! </h1>
    <p> We cant find the page you are looking for </p>
    <a href = '/'> take me home </a>
    `)}
})
server.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT} `);
    
});