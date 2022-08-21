const express = require("express")
const peopleRepository = require('./database/peopleRepository')
require('./database/init/dbInit');

const app = express()
const PORT = 3000;
const HOST = '0.0.0.0';


app.get('/', async (req, res) => {
    try {
        var people = await peopleRepository.getAllPeople();
        var peopleResponse = getPeopleResponse(people);
        res.send(peopleResponse);
    } catch (e) {
        res.send(e);
    }
})

function getPeopleResponse(people) {    
    
    var responseHtml = '<h1>Full Cycle Rocks!</h1>';

    if(people.length > 0) {
        
        var items = '<ul>';

        for(var i = 0; i < people.length; i++) {
            var p = people[i];
            items += '<li>Id: ' + p.id + ' Name: ' + p.name + '</li>';
        }

        items += '</ul>';

        responseHtml += '\n' + items;
    }

    return responseHtml;
}

app.get('/insert', async (req, res) => {
    if(!req.query.name) {
        res.send("Query param 'name' must be informed.");
        return;
    }

    const insertionResponse = await peopleRepository.insertPeople(req.query.name);
    res.send(insertionResponse);
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);