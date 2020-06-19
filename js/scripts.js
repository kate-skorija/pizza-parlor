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
  let userPizza = new Pizza(userSize);
  $("form").submit(function(event) {
    event.preventDefault();

    const userSize = $("#userSize").val();
    console.log(userSize);

    userPizza.cost = userPizza.sizeCost(userSize)

    $("#displayTotal").show();
    $(".userTotal").text("$" + userPizza.cost + ".00")

  });
})
