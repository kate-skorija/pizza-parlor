// Business Logic for Order -----------------------

function Order() {
  this.pizzas = [];
  this.currentId = 0;
}

Order.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
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
  this.cost = cost
  this.id = id
}

Pizza.prototype.fullPizza = function() {
  return this.size + " pizza with" + this.toppings;
}

Pizza.prototype.sizeCost = function() {
  let sizeCost = 4;
  if (this.size === "medium") {
    cost += 4;
  } else if (this.size === "large") {
    cost += 6;
  }
  return sizeCost;
}

// User Interface Logic ------------------

$(document).ready(function() {
  let userOrder = new Order();
  let userPizza = new Pizza();
  userOrder.addPizza(userPizza);

  let userToppings = [];
  userPizza.size = userSize
  userPizza.toppings = userToppings
  userPizza.cost = userPizza.sizeCost(userSize)

  $("#checkout").click(function(event) {                           // UI for Checkout Button
    event.preventDefault();
    
    const userSize = $("#userSize").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings.push($(this).val());
    });

    $("#displayTotal").show();
    $(".userTotal").text("$" + userPizza.cost + ".00")
    console.log(userPizza);
  });
  $("#anotherPizza").click(function(event) {                      // UI for Add Another Pizza Button
    event.preventDefault();



    $("#displayTotal").show();
    $(".userTotal").text("$" + userPizza.cost + ".00")
  });
}
