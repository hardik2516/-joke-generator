const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://v2.jokeapi.dev/joke/Programming?type=single";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the data to see if it's being fetched correctly

        quote.innerHTML = data.joke;
        author.innerHTML = "- Programming Joke";
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

getQuote(api_url);

function tweet() {
    const tweetText = `${quote.innerHTML} ---- by ${author.innerHTML}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "Tweet window", "width=600, height=300");
}