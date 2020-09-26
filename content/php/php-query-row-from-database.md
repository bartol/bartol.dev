# PHP query row from database

	$stmt = $db->query('SELECT name FROM users WHERE id = 1');
	$user = $stmt->fetch()
