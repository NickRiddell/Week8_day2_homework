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
      this.price = this.price - (this.price / 10);
    }else{
      this.price;
    }
  },
  //Certain items are buy one get on free, this should be considered.
  bOGOF: function(){
    for (var i = 0; i < items.length; i++) {
      var product = this.items[i];
      var title = product.item;
      var discount = product.discount;
      var bogofItems = [];
      if (discount === 'BoGoF'){
        bogofItems.push(title);
      }
    }
    var sorted_bogofItems = bogofItems.sort();
    }
  }


module.exports = myShoppingBasket;