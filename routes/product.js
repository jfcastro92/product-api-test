import Router from 'express';
const router = Router();
import { getProductById, getProducts } from '../services/product.service.js';
import { getCurrency } from '../services/httpCurrency.service.js';

/* GET Product by Id*/
router.get('/getProduct/:id', async function(req, res, next) {
  try {
    
    // MySQL Service call for querying the product by request id
    let product = (await getProductById(req.params.id)).data;

    //Answer with product result and query result length
    // Currenry Converter API for product price exchange to CAD validation
    if (product.length > 0 ) {
      const currencyExchange = (await getCurrency()).data.result;      
      product[0].price = product[0].price * currencyExchange;
    } else {
      product = [];
    }
    res.json(product);
  } catch (err) {
    console.error(`Error while getting product `, err.message);
    next(err);
  }
});

/* GET Products */
router.get('/getProducts/:counter', async function(req, res, next) {
  try {
    // MySQL Service call for querying the product prices 
    let products = await getProducts(req.params.counter);

    //Answer with products resultSet and query resultSet length
    // Currenry Converter API for product price exchange to CAD validation
    if (products.data.length > 0) {
      const currencyExchange = (await getCurrency()).data.result; 
      products.data.forEach(product => {
        product.price = product.price * currencyExchange;
      });
    } else {
      products = [];
    }

    //Answer with products resultSet
    res.json(products);
  } catch (err) {
    console.error(`Error while getting the products `, err.message);
    next(err);
  }
});

export default router;