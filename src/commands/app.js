const sql = require("mssql/msnodesqlv8")
const conn =new sql.ConnectionPool({
    database: "Testdata",
    server: "Nisarbasha",
    driver: "msnodesqlv8",
    Options:{
        trustServerCertificate: true,
        trustedConnection: true


    }
})

conn.connect().then((result) => {
    if (result.connecting){
        console.log('Connecting')
    }
    if (result.connected){
        console.log('Connected')
    }
}



)