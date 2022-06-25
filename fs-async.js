const {readFile , writeFile } = require('fs');
console.log('Start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    const firstThing = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        const secondThing = result;
        writeFile('./content/result-async.txt',
            `Here is the result : ${firstThing},
              ${secondThing}`, 
            (err, result) => {
                if (err) {
                console.log(err)
                return   
            }
            console.log('Done with this task')
        })
    })
});
console.log('Starting next task');
