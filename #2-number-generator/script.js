function generateNumbers() {
    const count = document.getElementById('count').value;
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const excludeStr = document.getElementById('exclude').value;
    const sort = document.getElementById('sort').checked;

    const exclude = excludeStr.split(',').map(value => parseInt(value.trim())).filter(value => !isNaN(value));

    let numbers = [];
    while (numbers.length < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
        if (!exclude.includes(randomNum) && !numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    if (sort) {
        numbers.sort((a, b) => a - b);
    }

    document.getElementById('numbers').textContent = numbers.join(', ');
}