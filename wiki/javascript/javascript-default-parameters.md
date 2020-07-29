# Javascript default parameters

	const sayHi = (user = "default user") => {
		return `Hey, ${user}!`;
	};

or

	const newUser = (name, greeting = `Hey, ${name}`) => {
		saveNameToDB(name);
		console.log(greeting);
	};
