document.addEventListener('yt-navigate-finish', removeShorts);

function removeShorts() {
	const nodes = document.querySelector('[is-shorts]');
	if (nodes.length > 0) {
		nodes[0].outerHTML = '';
	}
}