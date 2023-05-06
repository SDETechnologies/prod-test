const express = require('express');
const cors = require('cors');
const path = require('path');
const testRouter = require('../routes/TestRouter'); 
const { test } = require('node:test');


const app = express();
const PORT = 3001;
// const PORT = 8080;
// const PORT = 5001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

var testPath = path.join(__dirname,"../../client/build");
// console.log('testPath: ', testPath);
app.use(express.static(testPath));

app.listen(PORT, () => {
    console.log('Server is listen at http://localhost:' + PORT);
});

app.use('/api', testRouter);

app.get('/testserver', async (req, res) => {
    res.send({
        result: "ok"
    });
});

// app.get('/api/testserver', async (req, res) => {
//     res.send({
//         result: "ok"
//     });
// });
