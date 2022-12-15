let https = require('http');
let fleRead = require('fs');
const hostName = 'localhost';
const  port = 442;

const requesetListener =(req,res)=>{
    let webPage ='';
switch (req.url) {
    case '/':
        webPage = fleRead.readFileSync('home.html', 'utf-8');
        break;
   case '/about-us':
    webPage = fleRead.readFileSync('about.html', 'utf-8');
    break;
    case '/contact-us':
        webPage = fleRead.readFileSync('contact.html', 'utf-8');
        break;
        default:
            break;
}
res.write(webPage);
res.end();
}

const server1 = https.createServer(requesetListener);
server1.listen(port,hostName,()=>{
    console.log(`Server has started running on [http://${hostName}:${port}]`);
});

