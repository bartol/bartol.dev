# CKEditor set min height

	.ck-editor__editable {
		min-height: 400px;
	}
# Empty title

	<title>&lrm;</title>
# HTML arrow symbols

- `&larr;` (&larr;)
- `&rarr;` (&rarr;)
- `&uarr;` (&uarr;)
- `&darr;` (&darr;)
# HTML clock

	<body onload="setInterval(()=>document.getElementById('clock').innerHTML=new Date().toGMTString().slice(17,25))">
		<div id="clock"></div>
	</body>
# HTML copyright symbol

	&copy;
# HTML multiplication sign

	&times;
# HTML skip to content button

html:

	<button type="button" class="skipToContent">
		Skip to content
	</button>

css:

	.skipToContent {
		transform: translateY(-500px);
	}

	.skipToContent:focus {
		transform: translateY(0);
	}

js:

	document.querySelector("skipToContent").addEventListener("click", () => {
		document.getElementById("content").focus();
	});

# Bootstrap masonry layout

	<div class="card-columns">
		<div class="card mb-3">
			<a href="https://www.bdeak.net/files/artwork/logo.png">
				<img src="https://www.bdeak.net/files/artwork/logo.png" width="100%">
			</a>
		</div>
	</div>
