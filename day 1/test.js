// Soal 2: Pembalik String
// Deskripsi: Buatlah fungsi yang membalikkan string yang diberikan. Misalnya, jika inputnya adalah "hello", maka outputnya harus "olleh".
// Contoh Input:
// plaintext


// "hello"
// Contoh Output:
// plaintext


// "olleh"
    
    
    function reverseString(str){
        return str.split('').reverse().join('');
         
    }

    const data = 'memek';
    console.log(reverseString(data));