let enabled = true;

const enableButton = document.getElementById("enableButton");
generatorButton.addEventListener("click", enableAds);

const generatorButton = document.getElementById("disableButton");
generatorButton.addEventListener("click", disableAds);

function enableAds() {
    browser.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds : ["blocking_ruleset"], disableRulesetsIds : []});    
}

function disableAds() {
    browser.declarativeNetRequest.updateDEnabledRulesets({ enableRulesetIds : [], disableRulesetsIds : ["blocking_ruleset"]});    
}
