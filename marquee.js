window.addEventListener('load', function () {
	function go() {
		i = i < width ? i + step : 1;
		m.style.marginLeft = -i + 'px';
	}
	var i = 0,
		step = 3,
		space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	var m = document.getElementById('marquee');
	var t = m.innerHTML;
	m.innerHTML = t + space;
	m.style.position = 'absolute';
	var width = (m.clientWidth + 1);
	m.style.position = '';
	m.innerHTML = t + space + t + space + t + space + t + space + t + space + t + space + t + space;
	var x = setInterval(go, 50);
}, true);