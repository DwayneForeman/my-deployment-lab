const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.listen(4100, () => console.log(`Up and running on 4100`));
