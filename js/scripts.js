// Business Logic for Order -----------------------
function Order() {
  this.name = name,
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

// Business Logic for Pizzas ------------------------
function Pizza(size, crust, sauce, toppings, cost, id) {
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
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
  $("#displayPizzas").show();
  $('#addAnother').show();
  $("#name").hide();
  let pizzasList = $("ul#userPizzas");
  let pizzaInfo = "";
  order.pizzas.forEach(function(pizza) {
    pizzaInfo += "<li id=" + pizza.id + ">" + "<strong>" + "Pizza " + pizza.id + "</strong>" + ", " + pizza.size + ", " + pizza.crust + ", " + pizza.sauce + ", " + pizza.toppings + ", " + "$" + pizza.cost + ".00" + "</li>"; 
  });
  pizzasList.html(pizzaInfo);
}

$(document).ready(function() {
  let userOrder = new Order();
  $("#anotherPizza").click(function(event) {                           // UI for "Add Pizza" Button
    event.preventDefault();
    const userSize = $("#userSize").val();
    const userCrust = $("#userCrust").val();
    const userSauce = $("#userSauce").val();
    const userToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings.push($(this).val());
    });
    let newPizza = new Pizza(userSize, userCrust, userSauce, userToppings);
    newPizza.cost = newPizza.sizeCost(userSize)
    userOrder.addPizza(newPizza)
    userOrder.name = $("#orderName").val();
    document.getElementById("pizzaForm").reset();
    displayPizzas(userOrder);
    document.querySelector(".header").scrollIntoView({behavior: 'smooth'});
  });
  $("#checkout").click(function(event) {                              // UI for "Checkout" Button
    event.preventDefault();
    $("#displayTotal").show();
    $(".userTotal").text("$" + userOrder.orderCost + ".00")
    $("#pizzaForm").hide();
    $("#checkout").hide();
    $('#addAnother').hide();
  });
  $("#carryout").click(function(event) {                              // UI for "Carryout" Button  
    event.preventDefault();
    $("span.orderName").text(userOrder.name);
    $("#carryoutInfo").show();
    $("#delivery").hide();
    document.querySelector("#carryout").scrollIntoView({behavior: 'smooth'});
  });
  $("#delivery").click(function(event) {                              // UI for "Delivery" Button 
    event.preventDefault();
    $("#delivery").hide();
    $("#deliveryInfo").show();
    $("#carryout").hide();
    document.querySelector("#deliveryInfo").scrollIntoView({behavior: 'smooth'});
  });
  $("#orderDelivery").click(function(event) {                         // UI for "Submit Delivery" Button                  
    event.preventDefault();
    $("span.orderName").text(userOrder.name);
    $(".deliveryMessage").show();
    $("#orderDelivery").hide();
  });
  $(".reset").click(function() {
    location.reload(true);
    $(window).scrollTop(0);
  });
});