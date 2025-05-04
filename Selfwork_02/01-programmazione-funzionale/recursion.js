const imperativeFibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let previous = 0;
    let current = 1;
    for (let i = n; i > 1; i--) {
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
  
  };
  
  // Converti l'approcco imperativo in funzioale usando la ricorsione
  
  const recursiveFibonacci = (previous, current, n) => {
    if (n === 0) return 0;
    if (n === 1) return current;
    let next = previous + current 
    previous = current;
    current = next;
    return recursiveFibonacci(previous, current, n-1);
    
  };

  console.log(recursiveFibonacci(0, 1, 20));
