const getAdmin = "SELECT * FROM admins;";
const getAdminById = "SELECT * FROM admins WHERE cin = $1 ";
const checkEmailExists="SELECT a FROM admins a WHERE a.email= $1";
const addAdmin="INSERT INTO admins (cin,api,key,idsociety,activation,firstnamea,lastnamea,username,gendera,birthdatea,specialization,email,password,status,createdat,acceptedat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)";

const archiveAdmin = "UPDATE admins SET is_archived = true WHERE cin = $1";

const updateAdmin = "UPDATE admins SET username = $1 WHERE cin = $2";


module.exports= {
    getAdmin,
    getAdminById,
    checkEmailExists,
    addAdmin,
    
    updateAdmin,
    archiveAdmin,
};