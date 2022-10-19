const db = require('../db');
const peopleRepository = require('../peopleRepository');

// Call start
(async() => {
    console.log('Initializing database...');

    await db.startupDb();  
    await peopleRepository.createDefaultPeople();
    
    console.log('Database initialized!');
  })();
