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
