import express from "express";
import productRouter from './routes/product.js';


/*  Express Server instance and definition */
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
);

/* Express Product API routes implementation root and products endpoints using Router module */
app.get("/", (res) => {
  res.json({ message: "Product Currency Converter API using Express, MySQL and Javascript" });
});
app.use("/product", productRouter);


/* Error handler middleware */
app.use((err, res) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

/* Application url listening on port 3000 */
app.listen(port, () => {
  console.log(`MySQL Express API running on http://localhost:${port}`);
});