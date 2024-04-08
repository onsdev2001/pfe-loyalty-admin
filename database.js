const Pool = require('pg').Pool;



const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database: "loyalty",
    password:"dev2024",
    port:5432
    
});

module.exports=pool;
