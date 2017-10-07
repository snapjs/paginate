function showPage(page) {
	content.innerHTML = '';
	for (var i = 0; i < elements[page].length; i++) {
		content.appendChild(elements[page][i]);
	}
	for (var i = 0; i < document.getElementsByClassName('pager-link').length; i++) {
		document.getElementsByClassName('pager-link')[i].setAttribute('class','pager-link');
	}
	document.getElementById('pager-link-'+page).setAttribute('class','pager-link pager-link-selected')
	return false;
}
function paginate(contentId,pagerId,perPage) {
	var content = document.getElementById(contentId);
	var k = 0;
	var page = 1;
	window.elements = {};
	function createPageLink(page) {
		var pagerLink = document.createElement('a');
		pagerLink.setAttribute('onclick','showPage('+page+')');
		pagerLink.setAttribute('href','#');
		pagerLink.setAttribute('id','pager-link-'+page)
		pagerLink.setAttribute('class','pager-link')
		pagerLink.innerHTML = page;
		document.getElementById(pagerId).appendChild(pagerLink);
	}
	createPageLink(1);
	for (var i = 0; i < content.childNodes.length; i++) {
		if (content.childNodes[i].tagName) {
			if (elements[page] && elements[page].length === perPage) {
				page++;
				createPageLink(page);
			}
			if (!elements[page]) {
				elements[page] = [];
			}
			elements[page].push(content.childNodes[i]);
		}
	}
	if (page === 1) {
		document.getElementById(pagerId).innerHTML = '';
	}
	showPage(1);
}
