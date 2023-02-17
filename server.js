const express = require('express')
const usersRoutes = require('./src/users/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/data", usersRoutes);
app.use("/api/data2", usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
