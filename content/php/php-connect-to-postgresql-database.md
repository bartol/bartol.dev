# PHP connect to PostgreSQL database

	$host = 'localhost';
	$dbname = 'databasename';
	$user = 'postgres';
	$password = 'postgres';
	$options = [
	    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	    PDO::ATTR_EMULATE_PREPARES => false,
	];

	$db = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password, $options);
