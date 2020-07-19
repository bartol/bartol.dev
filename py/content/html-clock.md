# HTML clock

	<body onload="setInterval(()=>document.getElementById('clock').innerHTML=new Date().toGMTString().slice(17,25))">
		<div id="clock"></div>
	</body>
