/* Select Elements */
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const refresh = document.querySelector('#refresh');

/* Fetch API */
const URL = 'https://api.quotable.io/random';

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    /* InnerHTML */
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = `- ${data.author}`;
    console.table(data);
  })
  .catch((err) => console.log(err));

/* Refresh Page */
refresh.addEventListener('click', () => location.reload());
