fs = require('fs')

// Parse data
const parser = data => {
	const array = data.split(" ")
	// console.log(array)
	//find all elements that contain  data-stringify-emoji=
	const array2 = array.filter(s => s.includes('data-stringify-emoji='))
	//console.log(array2)
	const array3 = array2.map(s=>{
		//find first "
		let name = ""
		let split = s.split("")
		let found = false
		for(let i=0;i<split.length;i++){
			if(!found && split[i] == "\""){found = true}
		
			else if(found && split[i] == "\""){found = false}
			else if(found){name = name + split[i]}	
		}
		// gather all elements until next "
		//console.log(name)
		return ":" +name + ":"
	})
	//console.log(array3)
	return array3
}

//format emojis for one line in slack
const onelineEmojis = array => {
	let oneliner = ""
	console.log(array.length)
	array.forEach(e=>oneliner = oneliner + e + " ")
	//console.log(oneliner)
	return oneliner
}

// Read in file
fs.readFile('./input.txt','utf8', (err,data) => {
	if(err){return console.log(err)}
	// console.log(data)
	const emojis = parser(data)
	console.log("....")
	//console.log(emojis)
	const output = onelineEmojis(emojis)
	fs.writeFile('parrotParty.txt', output, err => {
		if(err){console.log(err)}
		else {console.log("outputted data to parrotParty.txt")}
	})
})


