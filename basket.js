var myShoppingBasket = {
  price: 0,
  items: [
  { item: 'Mixed Beans',
    cost: 1.25,
    discount: 'None'
  },
  { item: 'Venison',
    cost: 6,
    discount: 'None'
  },
  { item: 'Ground Turkey',
    cost: 4,
    discount: 'BoGoF'
  },
  { item: 'Ground Turkey',
    cost: 4,
    discount: 'BoGoF'
  },
  { item: 'Cinnamon Sticks',
    cost: 5.75,
    discount: 'None'
  }],
  totalCost: function(){
  for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      var cost = item.cost;
      this.price = this.price + cost;
      }
    },
  //10% discount for all shopping baskets over £20
  twentyDiscount: function(){
    if(this.price > 20){
      this.price = this.price - (this.price / 10 * 2);
    }else{
      this.price;
    }
  }
  }


module.exports = myShoppingBasket;