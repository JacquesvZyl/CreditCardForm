/* MasterCard 5, 
Visa 4. 
Discover 6. */

const creditcard = document.querySelector('.credit-card__wrapper');
const creditcardNumber = document.querySelector('.card-number');
const creditcardExpiration = document.querySelector('.expiration-date');
const creditcardForm = document.querySelector('form');
const signature = document.querySelector('.signature');
const cardHolder = document.querySelector('.card-holder');
const month = document.querySelector('.expiration-date-month')
const year = document.querySelector('.expiration-date-year')
const cvv = document.querySelector('.cvv-number')
const creditcardCvv = document.querySelector('.cvv')



function cardType(value) {

    switch(value) {
        case 4:
            return 'visa';   
        case 5:
            return 'mastercard'
        case 6:
            return 'discover'
        default:
            return 'visa';
    }
}

function setCard(value) {
    creditcard.classList.remove('visa','mastercard','discover');
    creditcard.classList.add(cardType(value));
}


function spacedCardNumber(number) {
    let convertedNum = '';

    for(i = 0; i< number.length; i++) {
        if( i % 4 === 0) {
            convertedNum += ` ${number[i]}`;
        }
        else {
            convertedNum += number[i];
        }
    }
    return convertedNum;
}


cvv.addEventListener('focus', (e) => {
    console.log(e.target.name);
    if(e.target.name === 'cvv')
        console.log(e.target.name);
        creditcard.classList.add('flip');
    
})

window.addEventListener('focusout', (e) => {
    if(e.target.name === 'card-number' && e.target.value) {
        setCard(parseInt(e.target.value[0]));
        creditcardNumber.firstElementChild.innerText = spacedCardNumber(e.target.value);
        creditcardNumber.lastElementChild.innerText = spacedCardNumber(e.target.value);
    }
    if(e.target.name === 'card-holder' && e.target.value) {
        signature.innerText = e.target.value;
        cardHolder.firstElementChild.innerText = e.target.value;
        cardHolder.lastElementChild.innerText = e.target.value;
    }
    if(month.value && year.value) {
        const date = `${month.value}/${year.value}`;
        creditcardExpiration.firstElementChild.innerText = date
        creditcardExpiration.lastElementChild.innerText = date
    }
    if(e.target.name === 'cvv' ) {
        creditcard.classList.remove('flip');
        creditcardCvv.innerText = e.target.value;
        }
        

    
})