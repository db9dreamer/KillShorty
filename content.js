document.addEventListener('yt-navigate-finish', removeShorts);

function removeShorts() {
    const nodes = document.querySelectorAll('[is-shorts]');
    if (nodes.length > 0) {
        nodes[0].outerHTML = '';
    }
}