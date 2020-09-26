# PHP query rows with parameters from database

	$stmt = $pdo->prepare('SELECT * FROM posts WHERE userid = :userid');
	$stmt->execute(['userid' => $userid]);
	while ($row = $stmt->fetch()) {
		echo $row['content'] . "\n";
	}
