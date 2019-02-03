
/*const micro = require('micro')

var defaultPort = process.env.PORT || 4200;

const server = micro(async (req, res) => {
    return {
        num: randomNumber()
    }
  })

  server.listen(defaultPort) */

module.exports = (req,res) =>{
    return {
        num: randomNumber()
    }
   // 'Welcome to node js';
}
function randomNumber (){
    return Math.random();
 }

 