const priceData = {};
const toggleButton = document.getElementById("priceToggle");
const priceElements = document.querySelectorAll(".inline-price .price");

priceElements.forEach(priceElement => {
  let dataSet = priceElement.dataset;
  priceData[dataSet.type] = dataSet;
});

toggleButton.addEventListener("change", event => {
  const isMonthly = event.target.checked;
  priceElements.forEach(priceElementNode =>
    setTextInTheElement(priceElementNode, isMonthly)
  );
});

const setTextInTheElement = (node, isMonthly) => {
  const priceType = node.attributes["data-type"].value; //A map object
  node.textContent = isMonthly
    ? priceData[priceType].monthly
    : priceData[priceType].annual;
};
