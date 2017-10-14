let input = document.getElementsByTagName("input");
let btn = document.getElementsByTagName("button");

btn[0].addEventListener('click', function(event){
//To clear p and arrays I have to clear values on click.

"use strict";
let num_array = [];
let compile = [];
let i=0, j=0, k=0, largest=0;
let p_string = 0;
document.getElementsByTagName("p")[0].innerHTML = "";
document.getElementsByTagName("p")[1].innerHTML = "";
document.getElementsByTagName("p")[2].innerHTML = "";
document.getElementsByTagName("p")[3].innerHTML = "";

	// This function change integer in to binary.
	function dec2bin(dec){
		return (dec >>> 0).toString(2);
	}

	document.getElementsByTagName("p")[0].innerHTML = input[0].value;
	document.getElementsByTagName("p")[1].innerHTML = dec2bin(input[0].value);
	p_string = document.getElementsByTagName("p")[1].innerHTML;
	num_array = p_string.split("");

	// parsing Array values into int from string.
	for(i=0; i < num_array.length; i++){
		num_array[i] = parseInt(num_array[i]);
	}

	// Counting 0's and putting their count in an array.
	for(i=0; i < num_array.length; i++){
		if(num_array[i] === 0){
			j++;
			if(num_array[i+1] === 1){
				compile[k] = j;
				document.getElementsByTagName("p")[2].innerHTML += compile[k] + ", ";
				if (j > largest){
					largest = j;
				}
				j = 0;
				k++;
			}
		}
	}

	document.getElementsByTagName("p")[3].innerHTML = "Largest sequence of zero in Array is of " + largest + ".";
});