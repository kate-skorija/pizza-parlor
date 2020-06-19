// Business Logic -----------------------

function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings,
  this.cost = cost
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
  let userPizza = new Pizza();
  $("form").submit(function(event) {
    event.preventDefault();
    
    const userSize = $("#userSize").val();
    let userToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings.push($(this).val());
    });

    userPizza.size = userSize
    userPizza.toppings = userToppings
    userPizza.cost = userPizza.sizeCost(userSize)

    $("#displayTotal").show();
    $(".userTotal").text("$" + userPizza.cost + ".00")
    console.log(userPizza);
  });
})
