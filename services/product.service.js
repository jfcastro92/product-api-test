import { query } from './db.js';
import { emptyOrRows } from '../helper.js';

//Function getProductById : Returns product from mySQL Database
/**
 * @param {integer} id  Product Id input param.
*/
async function getProductById(id){
  console.log("Querying Database : " + `SELECT id, name, price, description, productViewed FROM product WHERE id=${id}`);
  const rows = await query(
    `SELECT id, name, price, description, productViewed FROM product WHERE id=${id}`
  );
  const data = emptyOrRows(rows);

  return {
    data
  }
}

//Function getProducts : Returns a number of products from mySQL Database
/**
 * @param {integer} counter  Amount of products to query in the MySQL database
*/
async function getProducts(counter){
  console.log("Querying Database: " + `SELECT id, name, price, description, productViewed FROM product WHERE productViewed > 0 ORDER BY productViewed DESC LIMIT ${counter}`);
  const rows = await query(
    `SELECT id, name, price, description, productViewed FROM product WHERE productViewed > 0 ORDER BY productViewed DESC LIMIT ${counter}`
  );
  const data = emptyOrRows(rows);
  const meta = {counter};

  return {
    data,
    meta
  }
}

export {
  getProductById, getProducts
}