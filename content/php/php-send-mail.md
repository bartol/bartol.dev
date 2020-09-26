# PHP send mail

	$to = 'b@bdeak.net';
	$subject = 'subject';
	$message = 'message';
	$headers = 'From: robot@bdeak.net';

	mail($to, $subject, $message, $headers);
