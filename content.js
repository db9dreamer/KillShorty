//function removeShorts(source) {
//	const nodes = document.querySelectorAll('[is-shorts]');
//	console.log(`Found:${nodes.length} state: ${document.readyState} source: ${source}`);
//	nodes.forEach(node => { node.outerHTML = ''; });
//}

//document.addEventListener('DOMContentLoaded', removeShorts('DOMContentLoaded'));
//document.addEventListener('yt-navigate-finish', removeShorts('yt-navigate-finish'));


const observer = new MutationObserver(() => {
	const nodes = document.querySelectorAll('[is-shorts]');
	nodes.forEach(node => { node.outerHTML = ''; });
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});
