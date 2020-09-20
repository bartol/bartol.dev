# Python load environment variables from .env file

	$ pip install python-dotenv

then

	import os
	from dotenv import load_dotenv

	load_dotenv('.env')

	os.getenv('API_KEY')
