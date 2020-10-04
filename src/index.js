const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var i=0;
    
    var arrOfTens= substr(expr)

    var clearWords = arrOfTens.map(function(name) {
        if(name =='**********'){return ' '}
        else{return(name.slice(name.indexOf('1'),name.length))}
        // else{return(name.replace(/0+/, ''))}
      });
    
    var decoded = clearWords.map(function(element){
        if(element!=' '){
        return myDecode(element)
        }else{return ' '}
    })
    
    var findLetters = decoded.map(function(morseLetter){
        if(morseLetter!=" "){
           return MORSE_TABLE[morseLetter]
        }else{return ' '}
    })
    return findLetters.join('')
}


function substr(string){
    var i=0;
    var arr =[];
    for(i=0;i<string.length;i+=10){
    arr.push(string.substring(i,i+10))}
    return arr;
}

function myDecode(elem){
    var res = []
    for(i=0;i<elem.length;i+=2){
        if(elem[i]==1&&elem[i+1]==0){
            res.push('.')
        }
        else{res.push('-')}
    }
    return res.join('')
  }


module.exports = {
    decode
}
