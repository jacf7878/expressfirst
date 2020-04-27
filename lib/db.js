/*
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12341ab04',
  database:'escola'
});
*/

var connection=mysql.createConnection({
  host:'bpa2uue1ddimuimioeby-mysql.services.clever-cloud.com',
  user:'uxxwvbbkeu7mzvs5',
  password:'GIN1F03gp6PxfamQSb7e',
  database:'bpa2uue1ddimuimioeby'
});
connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});  
module.exports = connection;
