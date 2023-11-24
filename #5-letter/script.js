// Toggle visibility of custom alphabet textarea based on user selection
document.getElementById('alphabet').addEventListener('change', function() {
    document.getElementById('customAlphabet').style.display =
        this.value === '' ? 'block' : 'none';
});

function generateSequences() {
    const sequenceLength = parseInt(document.getElementById('sequenceLength').value, 10);
    const sequenceCount = parseInt(document.getElementById('sequenceCount').value, 10);
    const alphabetSelect = document.getElementById('alphabet');
    const customAlphabetTextarea = document.getElementById('customAlphabet');
    const wordCount = parseInt(document.getElementById('wordCount').value, 10);

    let alphabet;
    if (alphabetSelect.value === '') {
        // Use custom alphabet if provided
        alphabet = customAlphabetTextarea.value;
    } else {
        // Use selected alphabet
        alphabet = alphabetSelect.value;
    }

    let result = '';
    for (let i = 0; i < wordCount; i++) {
        for (let j = 0; j < sequenceCount; j++) {
            for (let k = 0; k < sequenceLength; k++) {
                const randomIndex = Math.floor(Math.random() * alphabet.length);
                result += alphabet.charAt(randomIndex);
            }
            result += ' ';
        }
        result = result.trim() + '<br />';
    }

    document.getElementById('result').innerHTML = result.trim();
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