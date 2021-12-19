var express = require("express")
var path = require("path")
var app = express();
var port = process.env.PORT || 4000

require('./db/conn')

// const static_folder = path.join(__dirname, "../src/public")
// console.log(static_folder)

// app.use(express.static(static_folder))


app.get('/', (req, res) => {
    // res.send("hello")
    res.render('Index.html');
    
});

app.listen(port, () => {
    console.log(`listening to server ${port} `)
})