function generateMACAddresses() {
    const startMac = document.getElementById('startMac').value.trim();
    const endMac = document.getElementById('endMac').value.trim();
    const macCount = parseInt(document.getElementById('macCount').value, 10);

    // Validate MAC address format
    if (!isValidMAC(startMac) || !isValidMAC(endMac)) {
        alert('Invalid MAC address format. Please enter valid MAC addresses.');
        return;
    }

    const startMacArray = startMac.split(':').map(hex => parseInt(hex, 16));
    const endMacArray = endMac.split(':').map(hex => parseInt(hex, 16));
    const generatedMACs = [];

    for (let i = 0; i < macCount; i++) {
        const randomMACArray = startMacArray.map((startHex, index) => {
            return startHex + Math.floor(Math.random() * (endMacArray[index] - startHex + 1));
        });

        const randomMAC = randomMACArray.map(hex => {
            const hexString = hex.toString(16).toUpperCase();
            return hexString.length === 1 ? '0' + hexString : hexString;
        }).join(':');

        generatedMACs.push(randomMAC);
    }

    document.getElementById('result').innerHTML = generatedMACs.join('<br/>');
}

// Validate MAC address format
function isValidMAC(mac) {
    const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macRegex.test(mac);
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