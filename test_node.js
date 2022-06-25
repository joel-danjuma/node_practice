const http = require('http')
const PORT = 3000
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the begining of something hooge')
    } else if (req.url === '/about'){
        res.end('We are about so many things, check it out !!!')
    } else {
        res.end(`
        <h1> OOPS!! I seem to have lost you there </h1>
        <h2> need to find something? check out our 
        <a href = '/about' > about </a>  page here </h2>
        <p> Need a way back ? </p>
        <a href = '/' > This is home </a>
        `)
    }
})
server.listen(PORT, ()=> {
    console.log(`The Server is listening on localhost : ${3000}`);
});