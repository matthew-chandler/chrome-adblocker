let enabled = true;

const enableButton = document.getElementById("enableButton");
generatorButton.addEventListener("click", () => {enabled = true;});

const generatorButton = document.getElementById("disableButton");
generatorButton.addEventListener("click", () => {enabled = false;});
