import { createConnection } from 'mysql2/promise';

//Function query : Returns a resultSet of items from MySQL Database
/**
 * @param {string} sql  Query to execute into the MySQL database
 * @param {string} params Params to query into the database
*/
async function query(sql, params) {
  const connection = await createConnection({
    host: "localhost",
    database: "localhost",
    user: "root",
    password: "root",
    port: "3306"
});
  const [results, ] = await connection.execute(sql, params);

  return results;
}

export { query }