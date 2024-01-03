function generateDates() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const dateTimeCount = parseInt(document.getElementById('dateTimeCount').value, 10);
    const dateFormat = document.getElementById('dateFormat').value;
    const generatedDates = [];

    // Validate start and end dates
    if (isNaN(startDate) || isNaN(endDate) || startDate > endDate) {
        alert('Invalid date range. Please enter valid start and end dates.');
        return;
    }

    for (let i = 0; i < dateTimeCount; i++) {
        const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTimestamp);

        let formattedDate;
        switch (dateFormat) {
            case 'MM-DD-YYYY':
                formattedDate = `${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}-${randomDate.getFullYear()}`;
                break;
            case 'YYYY-MM-DD':
                formattedDate = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;
                break;
            case 'DD-MM-YYYY':
                formattedDate = `${randomDate.getDate().toString().padStart(2, '0')}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getFullYear()}`;
                break;
            case 'UTC':
                formattedDate = randomDate.toISOString();
                break;
            default:
                formattedDate = randomDate.toISOString();
                break;
        }

        generatedDates.push(formattedDate);
    }

    document.getElementById('result').innerHTML = generatedDates.join('<br />');
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