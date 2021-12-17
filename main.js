let serv = require('./server');
var http = require('http');
var url = require('url');
let fs = require('fs');

  

function displayWord(){
    var word = serv.randomWord();
    // var wordLength = word.length;
    // var displayedWord = '';
        
    // for(i=0;i<wordLength;i++){
    //     displayedWord += " _ "
    // }
    // return (displayedWord);
    return word;

}

fs.readFile('./jeu.html', function (err1, html) {
    if (err1) throw err1;
    
    fs.readFile('./script.html', function (err, script) {

        if (err) throw err;

        http.createServer(function (req, res) {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            
            res.write(html);
            var word = displayWord();

            res.write('<p id="word" style="visibility:hidden">'+word+'</p>');
            
            res.write(script);



            res.end();
            
        }).listen(8080);

    });
});


