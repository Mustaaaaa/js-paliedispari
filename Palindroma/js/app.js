/* faccio partire un prompt in cui chiedo all'utente di scrivere una parola */
const userword = prompt('Scrivi una parola e scopri se è Palindroma'); 

/* creo la costante word */
const word = userword.toLowerCase();

/* creo la funzione per verificare se la parola è palindroma */
function isPalindrome(word){
/* creo la variabile revword che inverte la mia parola */
    let revword= word.split('').reverse('').join(''); 
    
    /* se la mia parola invertita è uguale a quella originale allora è palindroma */
    if(word == revword ){
        console.log(userword + ' è palindroma');
        return true;
        
    /* altrimenti la mia parola non è palindroma */
    } else {
        console.log(userword + ' non è palindroma');
        return false;
    }
}

const result = isPalindrome(userword);
console.log(result);