// Kilometer to meter convert function.....

function kilometerToMeter(kilometer) {
  var meter = 0;
  if (kilometer < 0) {
    console.log("unvalid number");
  }

  var meter = kilometer * 1000;
  return meter;
}
var result = kilometerToMeter(20);
console.log(result);

// Budget calculator for things total price output....

function budgetCalculator(clock, laptop, phone) {
  var result = clock * 50 + laptop * 500 + phone * 100;
  return result;
}
var totalPrice = budgetCalculator(5, 2, 3);
console.log(totalPrice);

// Hotel cost function different values and different price....

function hotelCost(perday) {
  var cost = 0;
  if (perday <= 10) {
    cost = perday * 100;
  } else if (perday <= 20) {
    var tenDays = 10 * 100;
    var remaining = perday - 10;
    var twentyDays = remaining * 80;
    cost = tenDays + twentyDdays;
  } else {
    var tenDays = 10 * 100;
    var twentyDays = 10 * 80;
    var remaining = perday - 20;
    var unlimitDays = remaining * 50;
    cost = tenDays + twentyDays + unlimitDays;
    return cost;
  }
}
var result = hotelCost(21);
console.log(result);

// Friend name output according to length .....

function magaFriend(friend1, friend2, friend3) {
  var longest1 = friend1;
  var longest2 = friend2;
  var longest3 = friend3;
  if (longest2 <= longest1 && longest3 <= longest1) {
    return friend1;
  } else if (longest1 <= longest2 && longest3 <= longest2) {
    return friend2;
  } else if (longest2 <= longest3 && longest1 <= longest3) {
    return friend3;
  }
}
var result = magaFriend("Rahim", "priyaka", "salauddin");
console.log(result);
