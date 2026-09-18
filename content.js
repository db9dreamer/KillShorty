console.log("In GetShorty");
// var firstPass = true;

function pruneNodes(filter) {
	const nodes = document.querySelectorAll(filter);
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
	pruneNodes("[is-shorts]");
	pruneNodes("[title='Shorts']");
	pruneMostRelevant();
	//firstPass = false;
	//observer.disconnect();
	//}
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});
