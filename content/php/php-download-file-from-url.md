# PHP download file from URL

	if (file_put_contents("logo.png", @fopen("https://www.bdeak.net/img/logo.png", 'r'))) {
		// file successfuly downloaded
	}

