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
