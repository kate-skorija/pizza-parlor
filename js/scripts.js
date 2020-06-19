function Pizza(size, toppings,) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.sizeCost = function() {
  let cost = 4;
  if (this.size === "medium") {
    cost += 4
  } else if (this.size === "large") {
    cost += 6
  }
}
