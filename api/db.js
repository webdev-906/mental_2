import mysql from "mysql2"

// this would need to be changed and tables created with mysql
export const db = mysql.createConnection({
host:"127.0.0.1",
  user:"root",
  password: "ilove0TTers",
  database:"blog"
})

db.connect((err) => { // Connecting to mysql
  if(err){
      console.log(`can't connect to db`);
      console.log(err.errno);
      return; 
  }
  console.log(`connection to db worked`);
})
