# Selenium headless firefox

	$ pip install selenium

then

	from selenium.webdriver import Firefox, FirefoxOptions

	options = FirefoxOptions()
	options.headless = True
	driver = Firefox(options=options)
