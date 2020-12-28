const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"node",
    multipleStatements:true
});
mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("connected");
    }
    else
    {
        console.log(err);

    }
});
module.exports= mysqlConnection;