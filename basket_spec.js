var basket = require('./basket');
var assert = require('assert');

describe('Basket', function(){
  it('Add up the total cost of the shopping', function(){
    basket.totalCost();
    assert.equal(21, basket.price);
  });
  //2. 10% discount for all shopping baskets over £20
  it('should give 10% discount for all shopping baskets over £20', function(){
    basket.twentyDiscount();
    assert.equal(16.8, basket.price)
  });
});