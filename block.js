// if class == "gpt-ad"
// "ad-slot-placeholder top-leaderboard"

function block_ads() {
    classes = ["gpt-ad","top-ads-container"]
    for (const className of classes) {
        const ads = document.getElementsByClassName(className);
        for (const ad of ads) {
            ad.remove()
        }
    }
    ads = document.getElementsByClassName("gpt-ad");
    for (const ad of ads)
        ad.remove();
}

const observer = new MutationObserver(block_ads);
const config = { attributes: true, childList: true, subtree: true };
const targetNode = document.getElementsByClassName("channel-root__right-column channel-root__right-column--expanded").item(0);

observer.observe(targetNode, config);

