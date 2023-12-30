require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.set("trust proxy", 1);

app.use(express.json({ limit: "4mb"}));
app.use(cors());

const PORT = 8888

// root routes
app.get('/', (req, res, next) => {
    res.send("App Works!")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})