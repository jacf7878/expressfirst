
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12341ab04',
  database:'escola'
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});  
module.exports = connection;
