# PHP error handling

	ini_set('display_errors', 0);
	ini_set('log_errors', 1);

	if ($isdev) {
		ini_set('display_errors', 1);
	}

get `$isdev` variable from [this](/php/php-check-if-running-in-dev-environment) post
