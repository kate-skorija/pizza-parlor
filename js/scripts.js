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

// Business Logic for Pizzas ------------------------
function Pizza(size, toppings, cost, id) {
  this.size = size,
  this.toppings = toppings,
  this.cost = cost,
  this.id = id
}

Pizza.prototype.sizeCost = function() {
  let sizeCost = 0;
  if (this.size === "Small") {
    sizeCost += 4
  } else if (this.size === "Medium") {
    sizeCost += 8;
  } else if (this.size === "Large") {
    sizeCost += 12;
  }
  this.toppings.forEach(function(topping) {
    sizeCost +=2;
  });
  return sizeCost;
}

// User Interface Logic ------------------
function displayPizzas(order) {
  $("#displayTotal").show();
  let pizzasList = $("ul#userPizzas");
  let pizzaInfo = "";
  order.pizzas.forEach(function(pizza) {
    pizzaInfo += "<li class=" + pizza.id + ">" + "<strong>" + "Pizza " + pizza.id + "</strong>" + ", " + pizza.size + ", " + pizza.toppings + ", " + "$" + pizza.cost + ".00" + "</li>";
  });
  pizzasList.html(pizzaInfo);
}

$(document).ready(function() {
  let userOrder = new Order();
  $("#anotherPizza").click(function(event) {                           // UI for "Checkout" Button
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
    displayPizzas(userOrder);
    $(".userTotal").text("$" + userOrder.orderCost + ".00")
  });
  $("#checkout").click(function(event) {                              // UI for "Add Another Pizza" Button
    event.preventDefault();
    const userSize = $("#userSize").val();
    const userToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings.push($(this).val());
    });
    let newPizza = new Pizza(userSize, userToppings);
    newPizza.cost = newPizza.sizeCost(userSize)
    userOrder.addPizza(newPizza)
    displayPizzas(userOrder);
    $(".userTotal").text("$" + userOrder.orderCost + ".00")
  });
});


// Order.prototype.deletePizza = function(id) {
//   for (let index = 0; index < this.pizzas.length; index++) {
//     if (this.pizzas[index]) {
//       if (this.pizzas[index].id == id) {
//         delete this.pizzas[index];
//         return true;
//       }
//     }
//   };
//   return false;
// }

// function deletePizzas(order, pizza)
//   let button = $(".delete");
//   button.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
//   $(".delete").on("click", ".delete", function() {
//     order.deletePizza(this.id)
//   })