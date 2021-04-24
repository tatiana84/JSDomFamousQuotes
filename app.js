let quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },

    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },

    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },

    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    }
];

const clickButton = documet.querySelector('.changeQuote');

clickButton.addEventListener('click', () => {
    let clickQuote = Math.floor(Math.random() * quotes.length);

    document.querySelector('.quote').innerText = quotes[clickQuote].quote;
    document.querySelector('.author').innerText = quotes[clickQuote].author;    
});