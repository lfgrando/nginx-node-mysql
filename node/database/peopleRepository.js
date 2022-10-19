const db = require('./db');
const defaultPeople = require('./init/defaultPeople.json');

function insertPeople(name) {
    return new Promise((resolve, reject) => {
        db.connect().then(conn => {
            const query = "insert into people(name) values (?)";
            conn.query(query, [name], function (error, results) {
                if (error) throw error;
                resolve(results);
            });
        });
    });
}

function getAllPeople() {    
    return new Promise((resolve, reject) => {
        db.connect().then(conn => {
            const query = "select id, name from people";
            conn.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
    });
}

async function createDefaultPeople() {
    var allPeople = await getAllPeople();
    if(allPeople.length > 0) {
        return;
    }

    for(var i = 0; i < defaultPeople.people.length; i++) {
        var people = defaultPeople.people[i];
        await insertPeople(people.name);
        console.log("Inserted people: " + people.name);
    }
}

module.exports = { getAllPeople, insertPeople, createDefaultPeople };