# PHP query rows from database

	$stmt = $db->query('SELECT name FROM users');
	while ($row = $stmt->fetch()) {
		echo $row['name'] . "\n";
	}
