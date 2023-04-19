/*

Write a recursive function called reverse which accepts a string and returns a new string in reverse.

*/
function reverse(str){
	console.log("Current Length of string input: " + str.length + ", string: " + str);
	if(str.length <= 1) {
		console.log("You have reached the base case! " + str);
		return str;
	}

	return reverse(str.slice(1)) + str[0]; // cuts up the string until only 1 index is left in the string, then return up
										// str[0] initially is empty
}

/*

how the call stack looks (pops off top to bottom)

reverse('d') 			 = return d
reverse('d') + 'c'		 = return d + c
reverse('cd') + 'b'      = return dc + b
reverse('bcd') + 'a' 	 = return dcb + a		--> str.slice(1) + str[0]

reverse('abcd') 		 = return dcba			--> call the function initially 

*/
console.log(reverse("abcd"));