const express = require("express");
const persoRoutes = require('./routes/persoRoutes');
const regionRoutes = require('./routes/regionRoutes');
const armeRoutes = require('./routes/armeRoutes');
const artefactRoutes = require('./routes/arteRoutes');
const userRoutes = require('./routes/userRoutes');

let port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("");
});

app.use('/persos', persoRoutes);
app.use('/regions', regionRoutes);
app.use('/armes', armeRoutes);
app.use('/artefacts', artefactRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
});

const cors = require('cors');
let corsOptions = {origin: '*'};
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
});

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(dirname, '../front-cli/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname + '../front-cli/build/index.html'))
})