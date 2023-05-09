const http = require('http');
const  superhero = require('superheroes');


const getName = superhero.random();

const { url } = require('inspector');


const server = http.createServer((req , res)=>{
    if(req.url== '/'){
        res.end(`Welcome to our homepage , Our today's superhero of the day is : ${getName}`)
    }
    if(req.url== '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>OOPs!</h1>
    <p>The page you are looking for is not available</p>`)

    
res.write('Welcome to our homepage');
res.end();

});


server.listen(3000, ()=>{
    console.log("Server is running at localhost port :3000, Check out that")
});