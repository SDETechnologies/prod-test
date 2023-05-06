const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.listen(PORT, () => {
    console.log('Server is listen at http://localhost:' + PORT);
});

app.get('/api/testserver', async (req, res) => {
    res.send({
        result: "ok"
    });
});
