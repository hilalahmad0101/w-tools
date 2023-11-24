function randomizeOutput() {
    const outputInput = document.getElementById('output').value.trim();
    const count = parseInt(document.getElementById('count').value, 10);

    // Basic validation
    const lines = outputInput.split('\n').filter(line => line.trim() !== '');

    // Randomize the output
    const randomizedLines = randomize(lines);

    // Display the randomized output up to the specified count
    document.getElementById('result').innerHTML = randomizedLines.slice(0, count).join('<br />');
}

function randomize(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function copyToClipboard() {
    const resultText = document.getElementById('result').textContent;

    // Create a temporary textarea element and set its value to the result text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = resultText;

    // Append the textarea to the document
    document.body.appendChild(tempTextarea);

    // Select and copy the text from the textarea
    tempTextarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextarea);

    // Show alert
    alert('Text copied to clipboard!');
}