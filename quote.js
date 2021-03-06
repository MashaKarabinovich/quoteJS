const quotes = [
{
    name: 'Stephen King',
    quote: 'Get busy living or get busy dying.'
}, 
{
    name: 'John F.Kennedy',
    quote: 'Those who dare to fail miserably can achieve greatly.'
},
{
    name: 'Abraham Lincoln',
    quote: 'Im a success today because I had a friend who believed in me and I didnt have the heart to let them down'
},
{
    name: 'Leondaro Da Vinci',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'

},
{
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy, be.'
},
{
    name: 'Oscar Wilde',
    quote: 'Be yourself; Everyone else is already taken.'
},
{
    name: 'William Shakespeare',
    quote: 'This above all: to thine own self be true.'
},
{
    name: 'Napoleon Hill',
    quote: 'If you cannot do great things, do small things in a great way.'
},
{
    name: 'Maya Angelou',
    quote: 'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'    
},
{
    name: 'Mahatama Gandhi',
    quote: 'You must be the change you wish to see in the world.'
}

]




const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    //we made the array with the *quotes so that it never exceeds the array
   quoteAuthor.innerHTML = quotes[number].name;
   //we select the quote another for inner html and use the array to get the number with the name
   quote.innerHTML = quotes[number].quote;
   //same thing, but with quote now.

}