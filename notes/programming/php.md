# Composer fix requirements could not be resolved error

	$ composer install --ignore-platform-reqs
# PHP array in query string

	?array_name[]=item&array_name[]=item_2
# PHP array length

	count($arr)
# PHP basic file upload

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
# PHP check if file exists

	if (file_exists('path/to/file')) {
		// file exists
	}
# PHP check if file is image

	if (@exif_imagetype('path/to/file')) {
		// file is image
	}
# PHP check if key in array exists

	if (array_key_exists('Zadar', $cities)) {
		echo 'key exists';
	}
# PHP check if running in dev environment

	$isdev = !!strpos($_SERVER['SERVER_SOFTWARE'], 'Development Server');
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
# PHP connect to SQLite database

	$db = new PDO('sqlite:data.sqlite');
# PHP download file from URL

	if (file_put_contents("logo.png", @fopen("https://www.bdeak.net/files/artwork/logo.png", 'r'))) {
		// file successfuly downloaded
	}

# PHP echo shortcut

	<?= $var ?>
# PHP error handling

	ini_set('display_errors', 0);
	ini_set('log_errors', 1);

	if ($isdev) {
		ini_set('display_errors', 1);
	}

get `$isdev` variable from [this](/php/php-check-if-running-in-dev-environment) post
# PHP explode string

	explode("/", $path)
# PHP get current year

	date("Y")
# PHP query row from database

	$stmt = $db->query('SELECT name FROM users WHERE id = 1');
	$user = $stmt->fetch()
# PHP query rows from database

	$stmt = $db->query('SELECT name FROM users');
	while ($row = $stmt->fetch()) {
		echo $row['name'] . "\n";
	}
# PHP query rows with parameters from database

	$stmt = $pdo->prepare('SELECT * FROM posts WHERE userid = :userid');
	$stmt->execute(['userid' => $userid]);
	while ($row = $stmt->fetch()) {
		echo $row['content'] . "\n";
	}
# PHP query row with parameters from database

	$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email AND status=:status');
	$stmt->execute(['email' => $email, 'status' => $status]);
	$user = $stmt->fetch();
# PHP redirect to URL

	if (!$item) {
		header('Location: /items');
		exit;
	}
# PHP require file

	 require 'item.php';
# PHP require vs include

- `require` if file is not available produces fatal error
- `include` if file is not available produces warning
# PHP send mail

	$to = 'b@bdeak.net';
	$subject = 'subject';
	$message = 'message';
	$headers = 'From: robot@bdeak.net';

	mail($to, $subject, $message, $headers);
# PHP use variable from outer scope

	$msg = "hi";

	function sendmsg() {
		global $msg;
		echo $msg;
	}
