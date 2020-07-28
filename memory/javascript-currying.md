# JavaScript currying

example:

	const doTheHardStuff = function(x) {
		const z = doSomethingComputationallyExpensive(x)
		return function (y){
			z + y
		}
	}

	const finishTheJob = doTheHardStuff(10)
	finishTheJob(20)
	finishTheJob(30)
