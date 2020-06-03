fs = require('fs')

// Parse data
const parser = data => {
	const array = data.split(" ")
	//find all elements that contain  data-stringify-emoji=
	const array2 = array.filter(s => s.includes('data-stringify-emoji='))
	const array3 = array2.map(s=>{
		let name = ""
		let split = s.split("")
		let found = false
		// find charaters between  one "  until next "
		for(let i=0;i<split.length;i++){
			if(!found && split[i] == "\""){found = true}		
			else if(found && split[i] == "\""){found = false}
			else if(found){name = name + split[i]}	
		}
		return ":" +name + ":"
	})
	return array3
}

//format emojis for one line in slack
const onelineEmojis = array => {
	let oneliner = ""
	array.forEach(e=>oneliner = oneliner + e + " ")
	return oneliner
}

// Read in file
fs.readFile('./input.txt','utf8', (err,data) => {
	if(err){return console.log(err)}
	//extract all emojis names from htnl
	const emojis = parser(data)  
	//format output so it can be pasted on a slack message
	const output = onelineEmojis(emojis) 
	fs.writeFile('parrotParty.txt', output, err => {
		if(err){console.log(err)}
		else {console.log("outputted data to parrotParty.txt")}
	})
})


