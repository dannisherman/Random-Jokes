const jokeContainer = document.getElementById('jokeContainer')
const getJokeBtn = document.getElementById('getJokeBtn')

// Function to fetch a random joke from the API
async function getJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    const data = await response.json()
    jokeContainer.innerHTML = data.joke
  } catch (error) {
    console.error('Error fetching joke:', error)
  }
}

// Event listener for the "Get Joke" button
getJokeBtn.addEventListener('click', getJoke)

// Initial joke fetch on page load
getJoke()
