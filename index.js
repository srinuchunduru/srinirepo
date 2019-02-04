
const micro = require('micro')

const defaultPort = process.env.PORT || 3000;

function randomNumber (){
    return Math.random();
 }

/*const server = micro(async (req, res) => {
    return {
        num: randomNumber()
    }
  });

  
  server.listen(defaultPort) ; */

 module.exports = (req,res) =>{
    return {
        num: randomNumber()+'Welcome to node js'
    }
   // 'Welcome to node js';
}


 