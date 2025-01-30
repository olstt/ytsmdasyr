function translateCode() {
    // Ambil teks input dari textarea
    const inputText = document.getElementById('inputText').value;

    // Aturan substitusi kode (misalnya huruf menjadi simbol)
    const codeMap = {
        'l': 'a',
        'v': 'b',
        'x': 'c',
        's': 'd',
        'w': 'e',
        'd': 'f',
        'f': 'g',
        'g': 'h',
        'u': 'i',
        'h': 'j',
        'j': 'k',
        'k': 'l',
        'n': 'm',
        'b': 'n',
        'i': 'o',
        'o': 'p',
        'p': 'q',
        'e': 'r',
        'a': 's',
        'r': 't',
        'y': 'u',
        'c': 'v',
        'q': 'w',
        'z': 'x',
        't': 'y',
        'm': 'z',
        ' ': ' '
    };

   // Proses teks dan ganti huruf sesuai kode
   let translatedText = '';
   for (let char of inputText.toLowerCase()) {
       if (codeMap[char]) {
           translatedText += codeMap[char];
       } else {
           translatedText += char; // Jika tidak ada aturan, gunakan karakter asli
       }
   }

   // Tampilkan hasil terjemahan
   document.getElementById('outputText').innerText = translatedText;
}