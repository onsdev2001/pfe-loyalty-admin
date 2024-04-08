
const express = require("express");
const adminRoutes = require("./src/admin/routes");
const companyRoutes = require("./src/TS/routes");


const app = express();
const port = 3002;

app.use(express.json());

app.get("/",(req, res) => {
    res.send("hello");
});

app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1/companies", companyRoutes); 

app.listen(port, () => console.log(`app listening on port ${port}`));

