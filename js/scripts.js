// Business Logic for Order -----------------------

function Order() {
  this.pizzas = [],
  this.orderCost = 0,
  this.currentId = 0
}

Order.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.orderCost += pizza.cost;
  this.pizzas.push(pizza);
}

Order.prototype.deletePizza = function(id) {
  for (let index = 0; index < this.pizzas.length; index++) {
    if (this.pizzas[index]) {
      if (this.pizzas[index].id == id) {
        delete this.pizzas[index];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Pizzas ------------------------
function Pizza(size, toppings, cost, id) {
  this.size = size,
  this.toppings = toppings,
  this.cost = cost,
  this.id = id
}

Pizza.prototype.fullPizza = function() {
  return this.size + " pizza with" + this.toppings;
}

Pizza.prototype.sizeCost = function() {
  let sizeCost = 4;
  if (this.size === "Medium") {
    sizeCost += 4;
  } else if (this.size === "Large") {
    sizeCost += 6;
  }
  this.toppings.forEach(function(topping) {
    sizeCost +=2;
  });
  return sizeCost;
}


// User Interface Logic ------------------

$(document).ready(function() {
  let userOrder = new Order();
  $("#anotherPizza").click(function(event) {                           // UI for Checkout Button
    event.preventDefault();
      
    const userSize = $("#userSize").val();
    const userToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings.push($(this).val());
    });
    
    let newPizza = new Pizza(userSize, userToppings);
    newPizza.cost = newPizza.sizeCost(userSize)
    userOrder.addPizza(newPizza)
    
    document.getElementById("pizzaForm").reset();
    $("#displayTotal").show();
    $(".userTotal").text("$" + userOrder.orderCost + ".00")
    console.log(newPizza);
    console.log(userOrder);
  });
});
//   $("#anotherPizza").click(function(event) {                      // UI for Add Another Pizza Button
//     event.preventDefault();



//     $("#displayTotal").show();
//     $(".userTotal").text("$" + newPizza.cost + ".00")
//   });
// });


 // userPizza.size = userSize
    // userPizza.toppings = userToppings
    // 