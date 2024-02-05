function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let statsCount = Number(input[1]);
  let dressPrice = Number(input[2]);
  let decorPrice = budget * 0.1;
  let totalDress = statsCount * dressPrice;
  if (statsCount > 150) {
    totalDress *= 0.9;
  }
  let totalCost = totalDress + decorPrice;
  if (totalCost <= budget) {
    console.log(`Action!
Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money!
 Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
  }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
