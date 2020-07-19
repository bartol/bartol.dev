# JavaScript error reporter

	window.onerror = function(msg, _path, line, column, error) {
		fetch('/errors', {
			error: error ? error.stack : '',
			column: column,
			line: line,
			msg: msg,
		})
		return false
	}