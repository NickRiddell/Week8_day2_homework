var basket = require('./basket');
var assert = require('assert');

describe('Basket', function(){
  it('Add up the total cost of the shopping', function(){
    basket.totalCost();
    assert.equal(16, basket.price);
  });
});