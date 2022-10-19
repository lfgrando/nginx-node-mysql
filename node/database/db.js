const mysql = require('mysql')

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

async function connect() { 
    
    if(global.connection && global.connection.state != 'disconnected'){
        return global.connection;
    }

    const connection = mysql.createConnection(dbConfig);
    global.connection = connection;
    return connection;
}

function startupDb () {

    return new Promise((resolve, reject) => {
        connect().then(conn => {
            const query = "CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))";
            conn.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
    })
}

module.exports = { connect, startupDb };