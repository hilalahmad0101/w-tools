function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeAmbiguous = document.getElementById('ambiguous').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const charset = generateCharset(includeNumbers, includeUppercase, includeLowercase, includeAmbiguous, includeSymbols);

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').textContent = password;
}

function generateCharset(includeNumbers, includeUppercase, includeLowercase, includeAmbiguous, includeSymbols) {
    let charset = '';
    if (includeNumbers) charset += '0123456789';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeAmbiguous) charset += '!@#$%^&*()-=_+[]{}|;:,.<>?';
    if (includeSymbols) charset += '~`"\'/\\';

    return charset;
}