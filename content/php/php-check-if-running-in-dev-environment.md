# PHP check if running in dev environment

	$isdev = !!strpos($_SERVER['SERVER_SOFTWARE'], 'Development Server');
