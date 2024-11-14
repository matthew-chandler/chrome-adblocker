let enabled = true;

const enableButton = document.getElementById("enableButton");
enableButton.addEventListener("click", enableAds);

const disableButton = document.getElementById("disableButton");
disableButton.addEventListener("click", disableAds);

function enableAds() {
    console.log("enabling");
    chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds : ["blocking_ruleset"], disableRulesetIds : []});    
}

function disableAds() {
    console.log("disabling");
    chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds : [], disableRulesetIds : ["blocking_ruleset"]});    
}
