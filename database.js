const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database: "loyalty",
    password:"dev2024",
    port:5432
    
});

module.exports=pool;
/*


client.connect();

client.query('select * from public."Customer"', (err, res) => {
    if(!err){
    console.log(res.rows);
} else{
        console.log(err.message);
}

    client.end;
})
*/