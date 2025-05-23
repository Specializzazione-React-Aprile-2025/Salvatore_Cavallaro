
let whoIsSenior = (list) => {
    let targetAge = 0;

    list.forEach(programmers => {
        if(programmers.age >= targetAge) targetAge = programmers.age;
    });

    return list.filter( p => p.age === targetAge);
}




const list1 = [ 
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' }, 
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' }, 
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' }, 
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' }, 
];

console.log(whoIsSenior(list1));




