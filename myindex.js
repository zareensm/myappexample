function myFunction(a, b) {
	var c = 0;
	for(var i = 0;i < a + b; i++) {
		c += i;
	}
	return c;
}
myFunction(5,6);