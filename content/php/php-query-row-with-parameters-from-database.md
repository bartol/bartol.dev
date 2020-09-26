# PHP query row with parameters from database

	$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email AND status=:status');
	$stmt->execute(['email' => $email, 'status' => $status]);
	$user = $stmt->fetch();
