const getAdmin = "SELECT * FROM admins WHERE is_archived = false;";
const getAdminById = "SELECT * FROM admins WHERE cin = $1 ";
const checkCinExists="SELECT a FROM admins a WHERE a.cin= $1";
const addAdmin="INSERT INTO admins (cin,api,key,idsociety,activation,firstnamea,lastnamea,username,gendera,birthdatea,specialization,email,password,status,createdat,acceptedat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)";

const archiveAdmin = "UPDATE admins SET is_archived = true WHERE cin = $1";

const updateAdmin = "UPDATE admins SET api = $1,key = $2,idsociety = $3,activation = $4,firstnamea = $5,lastnamea = $6,username = $7,gendera = $8,birthdatea = $9,specialization = $10,email = $11,password = $12,status = $13,createdat = $14,acceptedat = $15 WHERE cin = $16";


module.exports= {
    getAdmin,
    getAdminById,
    checkCinExists,
    addAdmin,
    
    updateAdmin,
    archiveAdmin,
};