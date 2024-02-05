window.addEventListener("load", solve);

function solve() {
  //capture inputs
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");

  //capture other elements
  const publishButton = document.getElementById("publish");
  const tableBody = document.getElementById("table-body");
  const carsListUl = document.getElementById("cars-list");
  const profit = document.getElementById("profit");

  //attach events
  publishButton.addEventListener("click", publish);

  //callbacks
  function publish(e) {
    e.preventDefault();
    const makeInputValue = makeInput.value;
    const modelInputValue = modelInput.value;
    const yearInputValue = yearInput.value;
    const fuelInputValue = fuelInput.value;
    const originalCostInputValue = Number(originalCostInput.value);
    const sellingPriceInputValue = Number(sellingPriceInput.value);

    if (
      !makeInputValue ||
      !modelInputValue ||
      !yearInputValue ||
      !fuelInputValue ||
      sellingPriceInputValue <= originalCostInputValue
    ) {
      return;
    }

    //tr
    const trElement = document.createElement("tr");
    trElement.classList.add("row");

    //tds
    const makeTdEl = document.createElement("td");
    makeTdEl.textContent = makeInputValue;

    const modelTdEl = document.createElement("td");
    modelTdEl.textContent = modelInputValue;

    const yearTdEl = document.createElement("td");
    yearTdEl.textContent = yearInputValue;

    const fuelTdEl = document.createElement("td");
    fuelTdEl.textContent = fuelInputValue;

    const originalCostTdEl = document.createElement("td");
    originalCostTdEl.textContent = originalCostInputValue;

    const sellingPriceTdEl = document.createElement("td");
    sellingPriceTdEl.textContent = sellingPriceInputValue;

    const buttonsTdElement = document.createElement("td");

    //define buttons
    const editButton = document.createElement("button");
    editButton.classList.add("action-btn", "edit");
    editButton.textContent = "Edit";

    const sellButton = document.createElement("button");
    editButton.classList.add("action-btn", "sell");
    editButton.textContent = "Sell";

    //attach buttons
    buttonsTdElement.appendChild(editButton);
    buttonsTdElement.appendChild(sellButton);

    //attach created tds to the row
    trElement.appendChild(makeTdEl);
    trElement.appendChild(modelTdEl);
    trElement.appendChild(yearTdEl);
    trElement.appendChild(fuelTdEl);
    trElement.appendChild(originalCostTdEl);
    trElement.appendChild(sellingPriceTdEl);
    trElement.appendChild(buttonsTdElement);

    // attach row to body
    tableBody.appendChild(trElement);

    //clear all function
    clearAll();

    //inner callbacks
    editButton.addEventListener("click", (e) => {
      e.preventDefault();

      makeInput.value = makeInputValue;
      modelInput.value = modelInputValue;
      yearInput.value = yearInputValue;
      fuelInput.value = fuelInputValue;
      originalCostInput.value = originalCostInputValue;
      sellingPriceInput.value = sellingPriceInputValue;

      trElement.remove();
    });
    sellButton.addEventListener("click", (e) => {
      e.preventDefault();

      //create li
      const liElement = document.createElement("li");
      liElement.classList.add("each-list");

      //create spans
      const makeModelSpan = document.createElement("span");
      makeModelSpan.textContent = `${makeInputValue} ${modelInputValue}`;

      const yearSpan = document.createElement("span");
      yearSpan.textContent = `${yearInputValue}`;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = sellingPriceInputValue - originalCostInputValue;

      //attach spans to li
      liElement.appendChild(makeModelSpan);
      liElement.appendChild(yearModelSpan);
      liElement.appendChild(priceModelSpan);

      //attach li to ul
      carsListUl.appendChild(liElement);

      //remove table row
      trElement.remove();

      //populate the profit
      profit.textContent = (
        Number(profit.textContent) +
        sellingPriceInputValue -
        originalCostInputValue
      ).toFixed(2);
    });
  }
  function clearAll() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";
  }
}
