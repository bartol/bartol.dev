# Show website layout

create bookmark with this location

	javascript: (function() {
		const element = document.querySelector('#test-layout-styles');
		if (element) {
			document.head.removeChild(element);
		} else {
			const style = document.createElement('style');
			style.id = 'test-layout-styles';
			style.innerHTML = `
				* { background-color: rgba(255,0,0,.2); }
				* * { background-color: rgba(255,0,255,.2); }
				* * * { background-color: rgba(0,255,255,.2); }
				* * * * { background-color: rgba(255,255,0,.2); }
				* * * * * { background-color: rgba(0,255,0,.2); }
				* * * * * * { background-color: rgba(0,0,255,.2); }
				* * * * * * * { background-color: rgba(255,0,0,.2); }
				* * * * * * * * { background-color: rgba(255,255,0,.2); }
				* * * * * * * * * { background-color: rgba(0,255,255,.2); }
			`;
			document.head.appendChild(style);
		}
	})();

[source](https://gist.github.com/vcastroi/e0d296171842e74ad7d4eef7daf15df6#gistcomment-3017296)