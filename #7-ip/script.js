function generateIPs() {
    const startIp = document.getElementById('startIp').value.trim();
    const endIp = document.getElementById('endIp').value.trim();
    const ipCount = parseInt(document.getElementById('ipCount').value, 10);

    // Validate IP address format
    if (!isValidIP(startIp) || !isValidIP(endIp)) {
        alert('Invalid IP address format. Please enter valid IP addresses.');
        return;
    }

    const startIpArray = startIp.split('.').map(Number);
    const endIpArray = endIp.split('.').map(Number);
    const generatedIPs = [];

    for (let i = 0; i < ipCount; i++) {
        const randomIPArray = startIpArray.map((startOctet, index) => {
            return startOctet + Math.floor(Math.random() * (endIpArray[index] - startOctet + 1));
        });

        generatedIPs.push(randomIPArray.join('.'));
    }

    document.getElementById('result').innerHTML = generatedIPs.join('<br />');
}

// Validate IP address format
function isValidIP(ip) {
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    return ipRegex.test(ip);
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