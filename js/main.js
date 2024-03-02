// Dad Joke API

const uri = 'https://icanhazdadjoke.com/';

const jokePlaceholder = document.querySelector('#joke');
const button = document.querySelector('.button');

button.addEventListener('click', async () => {
    const jokeObj = await getJoke(uri);
    jokePlaceholder.textContent = `${jokeObj.joke}`;
});

async function getJoke(url) {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
        },
    });

    const joke = await response.json();
    console.log(joke);
    return joke;
}
