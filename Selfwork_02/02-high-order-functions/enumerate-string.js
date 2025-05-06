/* number([]) => [] number(["a", "b", "c"]) => ["1: a", "2: b", "3: c"] */


let number = (array) => {
    if(array.length == 0) return 'Inserisci un array valido';
    let i = 1;
    return array.map( e => e = i++ + ': ' + e);
}

console.log(number([]));
