let enabled = true;

const enableButton = document.getElementById("enableButton");
generatorButton.addEventListener("click", enableAds);

const generatorButton = document.getElementById("disableButton");
generatorButton.addEventListener("click", disableAds);

enableAdsRuleset = {
    "id": "ruleset_1",
    "enabled": true,
    "path": "rules.json"
}

disableAdsRuleset = {
    "id": "ruleset_1",
    "enabled": false,
    "path": "rules.json"
}

function enableAds() {
    let options = { enableRulesetsIds : enableAdsRuleset };
    browser.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds : ["blocking_ruleset"], disableRulesetsIds : []});    
}

function disableAds() {
    let options = { disableRulesetsIds : disableAdsRuleset };
    browser.declarativeNetRequest.updateDEnabledRulesets({ enableRulesetIds : [], disableRulesetsIds : ["blocking_ruleset"]});    
}
