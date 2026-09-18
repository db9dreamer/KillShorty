console.log("in GetShorty");
var firstPass = true;

function pruneShorts() {
	const nodes = document.querySelectorAll("[is-shorts]");
	nodes.forEach(node => {
		//console.log(node);
		node.outerHTML = '';
	});
}

function pruneMostRelevant() {
	const node = document.getElementById("dismissible");
	if (node) {
		//console.log(node);
		node.outerHTML = '';
	}
}

const observer = new MutationObserver(() => {
	//if (firstPass) {
		pruneShorts();
		pruneMostRelevant();
		//firstPass = false;
		//observer.disconnect();
	//}
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});
