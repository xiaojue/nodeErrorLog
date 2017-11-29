let express = require('express');
let app = express();
let port = 8989;

app.get('/read.gif',(req,res,next)=>{

});

app.use((req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

app.listen(port);
console.log('the server is listen on %s',port);

