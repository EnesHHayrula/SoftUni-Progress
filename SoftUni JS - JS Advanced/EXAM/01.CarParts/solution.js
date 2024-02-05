window.addEventListener("load", solution);

function solution() {
  // Get info
  const carModelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const partNameInput = document.getElementById("part-name");
  const partNumberInput = document.getElementById("part-number");
  const conditionInput = document.getElementById("condition");
  const nextButton = document.getElementById("next-btn");
  const infoList = document.querySelector(".info-list");

  nextButton.addEventListener("click", function () {
    const carModel = carModelInput.value.trim();
    const carYear = parseInt(carYearInput.value.trim());
    const partName = partNameInput.value.trim();
    const partNumber = partNumberInput.value.trim();
    const condition = conditionInput.value.trim();

    // Validate input
    if (
      carModel === "" ||
      isNaN(carYear) ||
      carYear < 1980 ||
      carYear > 2023 ||
      partName === "" ||
      partNumber === "" ||
      condition === ""
    ) {
      return;
    }

    // Create list item with the entered information
    const listItem = document.createElement("li");
    listItem.classList.add("part-content");
    const article = document.createElement("article");
    const carModelParagraph = createParagraph("Car Model", carModel);
    const carYearParagraph = createParagraph("Car Year", carYear.toString());
    const partNameParagraph = createParagraph("Part Name", partName);
    const partNumberParagraph = createParagraph("Part Number", partNumber);
    const conditionParagraph = createParagraph("Condition", condition);

    article.appendChild(carModelParagraph);
    article.appendChild(carYearParagraph);
    article.appendChild(partNameParagraph);
    article.appendChild(partNumberParagraph);
    article.appendChild(conditionParagraph);

    listItem.appendChild(article);

    // Add the list item to the info list
    infoList.appendChild(listItem);

    // Clear input
    clearInput();

    // Disable the Next button and enable Edit and Continue buttons
    nextButton.disabled = true;
    const editButton = createButton("Edit", "edit-btn");
    const continueButton = createButton("Continue", "continue-btn");

    listItem.appendChild(editButton);
    listItem.appendChild(continueButton);

    // Step 2: Edit button
    editButton.addEventListener("click", function () {
      carModelInput.value = carModel;
      carYearInput.value = carYear;
      partNameInput.value = partName;
      partNumberInput.value = partNumber;
      conditionInput.value = condition;

      infoList.removeChild(listItem);
      nextButton.disabled = false;
    });

    // Step 3: Continue button
    continueButton.addEventListener("click", function () {
      const confirmListItem = createConfirmListItem(article.innerHTML);
      const confirmButton = createButton("Confirm", "confirm-btn");
      const cancelButton = createButton("Cancel", "cancel-btn");

      confirmListItem.appendChild(confirmButton);
      confirmListItem.appendChild(cancelButton);

      const confirmList = document.querySelector(".confirm-list");
      confirmList.appendChild(confirmListItem);

      infoList.removeChild(listItem);
    });
  });

  // Step 4: Confirm button
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("confirm-btn")) {
      const listItem = target.parentNode;
      const confirmList = listItem.parentNode;

      confirmList.removeChild(listItem);
      nextButton.disabled = false;

      const completeImg = document.getElementById("complete-img");
      const completeText = document.getElementById("complete-text");
      completeImg.style.visibility = "visible";
      completeText.textContent = "Part is Ordered!";
    }
  });

  // Step 5: Cancel button
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("cancel-btn")) {
      const listItem = target.parentNode;
      const confirmList = listItem.parentNode;

      confirmList.removeChild(listItem);
      nextButton.disabled = false;
    }
  });

  // function to create element
  function createParagraph(label, value) {
    const paragraph = document.createElement("p");
    paragraph.textContent = label + ": " + value;
    return paragraph;
  }

  // function to create a button
  function createButton(text, className) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    return button;
  }

  //function to create a confirm list item
  function createConfirmListItem(htmlContent) {
    const listItem = document.createElement("li");
    listItem.classList.add("part-content");
    listItem.innerHTML = htmlContent;
    return listItem;
  }

  // function to clear input
  function clearInput() {
    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";
  }
}
