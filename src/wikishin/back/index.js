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

