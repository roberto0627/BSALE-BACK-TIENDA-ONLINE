
require('dotenv').config();
const {createPool} = require('mysql');
const {DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE} = process.env;
const conection = createPool({
  host: DB_HOST,
  user : DB_USER,
  password : DB_PASSWORD,
  database: DB_DATABASE
})
conection.query('select * from product', (error)=>{
  if(error){
    console.log(error);
    return 
  }else{
    console.log('database is conected')
  }
} )
module.exports = conection;