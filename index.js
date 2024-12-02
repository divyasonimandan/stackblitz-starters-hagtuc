const express = require('express');
const cors= require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock portfolio analysis API!")
})


// Endpoint 1: Calculate the Returns of the Stocks added

function getCalculatedReturns(boughtAt, marketPrice, quantity) {
  return  (marketPrice - boughtAt) * quantity;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  res.send(getCalculatedReturns(boughtAt, marketPrice, quantity).toString())
})

// Endpoint 2: Calculate the Total Returns.

function getTotalReturns(stock1, stock2, stock3, stock4) {
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  return totalReturns;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(getTotalReturns(stock1, stock2, stock3, stock4).toString())
})

// Endpoint 3: Calculate the Return Percentage.

function getReturnPercentage(boughtAt, returns) {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage;
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  
  res.send(getReturnPercentage(boughtAt, returns).toString())
})

// Endpoint 4: Calculate the Total Return Percentage

function getTotalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(getTotalReturns(stock1, stock2, stock3, stock4).toString())
})

// Endpoint 5: Identify the Status of Stocks based on their Return Value.

function getStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return "Profit"
  } else {
    return "Loss"
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  res.send(getStatus(returnPercentage).toString())
})








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
