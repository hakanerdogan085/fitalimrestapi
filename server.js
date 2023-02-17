const express = require('express')
const usersRoutes = require('./src/users/routes');
const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


app.use("/api", usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
