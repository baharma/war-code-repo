// Soal 1: Pembalik String
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



// Soal 3: Bilangan Genap dan Ganjil
// Deskripsi: Buatlah program yang menerima sebuah array angka dan memisahkan angka genap dan ganjil ke dalam dua array terpisah.
// Contoh Input:
// plaintext


// [1, 2, 3, 4, 5, 6]
// Contoh Output:
// plaintext


// Genap: [2, 4, 6]
// Ganjil: [1, 3, 5]

function genap(arr){
    return arr.filter(num =>num % 2 === 0);
}

function ganjil (arr){
    return arr.filter(num => num % 2!== 0);
}

console.log(ganjil([1, 2, 3, 4, 5, 6]));