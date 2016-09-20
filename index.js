var links = ["https://github.com/candelibas/awesome-ionic2"];

var ang2li =document.getElementById('ang2');

var creator = function (type,parent){
	el = document.createElement(type);
	parent.appendChild(el);
	return el;
};

for (var i=links.length;i>0;i--){
	var el = creator('li',ang2li);
	el.innerHTML = links[i];
}