% html

## mailto

### mail to link

	<a href="mailto:[email]">[text]</a>

### mail to link add subject

	<a href="mailto:[email]?subject=[subject]">[text]</a>

### mail to link add cc

	<a href="mailto:[email]?cc=[email], [email]">[text]</a>

### mail to link add bcc

	<a href="mailto:[email]?bcc=[email], [email]">[text]</a>

### mail to link add body

	<a href="mailto:[email]?body=[body]">[text]</a>

## auto refresh page

	<meta http-equiv="refresh" content="[seconds]">

## Faster Google Fonts

	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" media="print" onload="this.media='all'" />

[source](https://csswizardry.com/2020/05/the-fastest-google-fonts/)

## Link to CSS file

	<link rel="stylesheet" type="text/css" href="/css/main.css" />

# Reset form state button

	<input type="reset">

# Responsive HTML email template

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title>SUBJECT</title>
			<style type="text/css">
			body {margin: 0; padding: 0; min-width: 100%!important;}
			.content {width: 100%; max-width: 800px;}
			</style>
		</head>
		<body bgcolor="BG_COLOR" style="font-family: Arial, Helvetica, sans-serif;">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table class="content" align="center" cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td>
									CONTENT
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</body>
	</html>

## optimize videos

- use lowest bitrate that works with content
- add preload attribute to video tag
- use [mp4 fast start](/notes/linux#mp4-fast-start)
