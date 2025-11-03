const observer = new MutationObserver(() => {
	const nodes = document.querySelectorAll('[is-shorts]');
	nodes.forEach(node => { node.outerHTML = ''; });
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});
