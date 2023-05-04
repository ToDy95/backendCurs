const fs = require('fs');
exports.readFromFile = (req, res) => {
    const response = fs.readFileSync('./files/test.txt', 'utf-8');
    // const response = fs.readFileSync(`./${req.body.filename}.txt`,'utf-8');
    // preluare dinamica 
    res.send(`<h1>${response}</h1>`)
}

exports.writeInAFile = (req, res) => {
    const response = fs.writeFileSync('./files/test.txt', req.body.message);
    res.send(response)
}

exports.createNewFile = (req, res) => {
    fs.writeFileSync('./files/newtextFile.txt', req.body.message, (err) => {
        if (err) throw err;
    })
}
exports.addDataJson =  async (req, res) => {
    console.log("test")
    const response = fs.readFileSync('./files/data.json', 'utf-8');
    console.log(response)
    const data = await JSON.parse(response);
    let max = 0;
    await data.map(character => {
      if (character.id > max) {
        max = character.id;
      }
    });
  
    let newData = {
      id: max + 1,
      name: req.body.name
    }
  
    await data.push(newData)
  
    const write = fs.writeFileSync('./files/data.json', JSON.stringify(data), 'utf8');
    
  }
 