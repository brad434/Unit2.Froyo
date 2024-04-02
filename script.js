const userInput = prompt("Please enter your order");

const myOrder = {};

function getOrder(order) {
  for (let i = 0; i < order.length; i++) {
    let flavor = order[i].trim();
    if (
      flavor === "vanilla" ||
      flavor === "strawberry" ||
      flavor === "coffee"
    ) {
      if (!myOrder[flavor]) {
        myOrder[flavor] = 1;
      } else {
        myOrder[flavor] += 1;
      }
    }
  }
}

getOrder(userInput.split(","));
console.table(myOrder);
