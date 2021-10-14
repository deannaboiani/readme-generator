const fs = require('fs');
const qGen = require('./qGen');

fs.writeFile('readme.md', `$(data.promptUser)\n`,
(err) => 
err ? console.error.err : console.log('append'))

