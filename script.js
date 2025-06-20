function stringChop(str, size) {
  // your code here
	if (str === null) return [];
    if (chunkSize > str.length) return [str];

    const chunks = [];
    
    // Step 2: Loop through the string
    for (let i = 0; i < str.length; i += chunkSize) {
        // Step 3: Slice and push to the array
        chunks.push(str.slice(i, i + chunkSize));
    }
    
    // Step 4: Return the result
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
