const express = require('express');
const cors = require('cors');
const path = require('path');
const testRouter = require('.././routes/TestRouter'); 
const { test } = require('node:test');


const app = express();
// const PORT = 3000;
const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.listen(PORT, () => {
    console.log('Server is listen at http://localhost:' + PORT);
});

app.use('/api', testRouter);

// app.get('/api/testserver', async (req, res) => {
//     res.send({
//         result: "ok"
//     });
// });
