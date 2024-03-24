const pool = require("../../database");
const queries = require('./queries');

const getAdmin = (req,res) => {
    pool.query(queries.getAdmin,(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);

    });
};
const getAdminById = (req,res) => {
    const cin = parseInt(req.params.cin);
    pool.query(queries.getAdminById,[cin],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);

    });
};
const addAdmin = (req, res) => {
    const {
        cin,
        api,
        key,
        idsociety,
        activation,
        firstnamea,
        lastnamea,
        username,
        gendera,
        birthdatea,
        specialization,
        email,
        password,
        status,
        createdat,
        acceptedat
    } = req.body;

    // Check if cin already exists
    pool.query(queries.checkCinExists, [cin], (error, results) => {
        if (error) {
            console.error("Error checking cin:", error);
            return res.status(500).send("Internal Server Error");
        }
        
        if (results.rows.length) {
            return res.status(400).send("cin already exists");
        }    

        // Add admin if cin doesn't exist
        pool.query(queries.addAdmin, [cin, api, key, idsociety, activation, firstnamea, lastnamea, username, gendera, birthdatea, specialization, email, password, status, createdat, acceptedat], (error, results) => {
            if (error) {
                console.error("Error adding admin:", error);
                return res.status(500).send("Internal Server Error");
            }
            res.status(201).send("Admin created successfully");
        });
    });
};

const archiveAdmin = (req, res) => {
    const cin =parseInt(req.params.cin);

    
    pool.query(queries.getAdminById, [cin], (error, results) => {
        const noAdminFound =! results.rows.length;
        if (noAdminFound) {
            res.send("Admin does not exist in db");
        }
        pool.query(queries.archiveAdmin, [cin], (error, results) => {
            if (error ) throw error;
            res.status(200).send("Admin archived successfully");
        });
    });
};
/*const deleteAdmin = (req, res) => {
    const cin =parseInt(req.params.cin);

    
    pool.query(queries.getAdminById, [cin], (error, results) => {
        const noAdminFound =! results.rows.length;
        if (noAdminFound) {
            res.send("Admin does not exist in db");
        }
        pool.query(queries.deleteAdmin, [cin], (error, results) => {
            if (error ) throw error;
            res.status(200).send("Admin deleted successfully");
        });
    });
};
   */
  const updateAdmin = (req,res)=>{
    const cin = parseInt(req.params.cin);
    const {api, key, idsociety, activation, firstnamea, lastnamea, username, gendera, birthdatea, specialization, email, password, status, createdat, acceptedat} = req.body;

    pool.query(queries.getAdminById, [cin], (error, results) => {
        const noAdminFound =! results.rows.length;
        if (noAdminFound) {
            res.send("Admin does not exist in db");
        }
        pool.query(queries.updateAdmin, [api, key, idsociety, activation, firstnamea, lastnamea, username, gendera, birthdatea, specialization, email, password, status, createdat, acceptedat,cin], (error, results) => {
            if (error ) throw error;
            res.status(200).send("Admin updated successfully");
        });
    });
  };




module.exports= {
    getAdmin,
    getAdminById,
    addAdmin,
   
    updateAdmin,
    archiveAdmin,
    
};