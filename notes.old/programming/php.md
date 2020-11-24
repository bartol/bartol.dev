# PHP

# Composer fix requirements could not be resolved error

	$ composer install --ignore-platform-reqs

## Array in query string

	?array_name[]=item&array_name[]=item_2

## Array length

	count($arr)

## Basic file upload

html:

	<form action="/upload.php" method="post" enctype="multipart/form-data">
		<input type="file" name="file" />
	</form>

upload.php:

	$file = $_FILES['file'];
	$filename = "uploads/" . $file['name'];

	if (move_uploaded_file($file["tmp_name"], $filename)) {
		echo '/' . $filename;
	}

## Check if file exists

	if (file_exists('path/to/file')) {
		// file exists
	}

## Check if file is image

	if (@exif_imagetype('path/to/file')) {
		// file is image
	}

## Check if key in array exists

	if (array_key_exists('Zadar', $cities)) {
		echo 'key exists';
	}

## Check if running in dev environment

	$isdev = !!strpos($_SERVER['SERVER_SOFTWARE'], 'Development Server');

## Connect to PostgreSQL database

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

## Connect to SQLite database

	$db = new PDO('sqlite:data.sqlite');

## Download file from URL

	if (file_put_contents("logo.png", @fopen("https://www.bdeak.net/files/artwork/logo.png", 'r'))) {
		// file successfuly downloaded
	}

## Echo shortcut

	<?= $var ?>

## Error handling

	ini_set('display_errors', 0);
	ini_set('log_errors', 1);

	if ($isdev) {
		ini_set('display_errors', 1);
	}

get `$isdev` variable from [this](/php/php-check-if-running-in-dev-environment) post

## Explode string

	explode("/", $path)

## Get current year

	date("Y")

## Query row from database

	$stmt = $db->query('SELECT name FROM users WHERE id = 1');
	$user = $stmt->fetch()

## Query rows from database

	$stmt = $db->query('SELECT name FROM users');
	while ($row = $stmt->fetch()) {
		echo $row['name'] . "\n";
	}

## Query rows with parameters from database

	$stmt = $pdo->prepare('SELECT * FROM posts WHERE userid = :userid');
	$stmt->execute(['userid' => $userid]);
	while ($row = $stmt->fetch()) {
		echo $row['content'] . "\n";
	}

## Query row with parameters from database

	$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email AND status=:status');
	$stmt->execute(['email' => $email, 'status' => $status]);
	$user = $stmt->fetch();

## Redirect to URL

	if (!$item) {
		header('Location: /items');
		exit;
	}

## Require file

	 require 'item.php';

## require vs include

- `require` if file is not available produces fatal error
- `include` if file is not available produces warning

## Send mail

	$to = 'b@bdeak.net';
	$subject = 'subject';
	$message = 'message';
	$headers = 'From: robot@bdeak.net';

	mail($to, $subject, $message, $headers);

## Use variable from outer scope

	$msg = "hi";

	function sendmsg() {
		global $msg;
		echo $msg;
	}
