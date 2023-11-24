function randomizeOutput() {
    const outputInput = document.getElementById('output').value.trim();

    // Basic validation
    const lines = outputInput.split('\n').filter(line => line.trim() !== '');

    // Randomize the output
    const randomizedLines = randomize(lines);

    // Display the randomized output
    document.getElementById('result').innerHTML = randomizedLines.join('<br />');

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