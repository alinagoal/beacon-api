const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json()) 
app.use(bodyParser.text())

// app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get("/", (req, res) => res.sendFile(`C:\\Users\\adang\\beacon-api\\fe.html`))
// app.get("/img/:id", (req, res)=> {
//     const id = req.params.id;
//     res.sendFile(`${__dirname}/img/${id}`)
// })

// ----url-------/endpoint/{pathparmas}?q=q1&w=q2
// localhost:port/endpoint?id1=asdsad&id2=asdassdsf

app.get('/alina', (req, res ) => {
	console.log('im alina')
	res.send({'suuccess':true})
})

app.post("/beacon", (req, res) => {
    console.log(`body`, req.body)
    console.log(`query`, req.query)
	res.send({ title: 'GeeksforGeeks' });
})
app.listen(4000, ()=>console.log("Listening on 4000"))


