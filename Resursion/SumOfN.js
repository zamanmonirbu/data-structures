

function printFun(test)
	{
		if (test < 1)
			return;
		else {
			console.log(test + " ");
			printFun(test - 1); // statement 2
			console.log("i am",test + " ");
			return;
		}
	}

// Driver code
	let test = 3;
	printFun(test);


