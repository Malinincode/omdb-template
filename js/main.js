/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/
/* let url = 'https://www.omdbapi.com/?apikey=480593d7&s=marvel&type=movie'; */

/* PSEUDOKOD
* Fyll i marvel film.
* Url kopplat till när man fyller i input. 
* Olika filmer visas som förslag, en lista, under tiden man skriver in film. 
* Välj vilken typ: movie, episode, serie. Visas som lista som rullgardin. 
* Vid ej hittat någon film - felmeddelande: Sorry can´t find the movie. Try again!



*/



const data = async() => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=480593d7&s=marvel`);
    const movieData = await response.json();
    console.log(movieData);
    movieOutput(movieData)
    
} 
data();

 
const movieOutput = (data) => {
console.log(data);
console.log(data.Search[0].Title);
for(let movie of data.Search) {
    console.log(movie);
    let movieDiv = document.createElement("div");
    let movieHeader = document.createElement("h3");
    let movieImg = document.createElement("img");

    document.getElementById("movie-section").append(movieDiv);
    movieDiv.append(movieHeader);
    movieHeader.append(movie.Title);
     movieImg.src = movie.Poster;
     movieDiv.append(movieImg);
     
    let movieLink = document.createElement("a");
    movieLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
    movieLink.target = "_blank";
    movieDiv.append(movieLink);
    movieLink.append("Click to go to imdb")
}

}

document.addEventListener(`input`, function(){

console.log("aöflk");

}) 















/* 
async function fetchInput() {

    try {
        let response = await fetch('https://www.omdbapi.com/?apikey=480593d7&s=marvel&type=movie');
        console.log(response.json());

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        
        }

        let data     = await response.text();
        document.getElementById('text').innerHTML = data
    } catch (error) {
        console.log(error);
        document.getElementById('text').innerHTML = 'Opps, got some problems with the server. Please try again later';
    } finally {
        console.log("The finally-block is used when something is needed to be done regardless of the outcome")
    } 
}

fetchInput();   
 */







/* let text = document.getElementById('text');
let input = document.getElementById('input')

console.log(text);
 for(let text of input) {
    text.addEventListener('text', fetchData);
}

async function fetchData(e) {
    e.preventDefault();

    text = e.target;
    let title = text.id;
    title = text.innerText;

    try {
        const response = await fetch('https://www.omdbapi.com/?apikey=480593d7&s=marvel&type=movie');
        if(!response.ok) {
            throw new Error('Ops! I can´t find your movie, try again!');
        }
        const data = await response.json();
   
        let HTMLContent = '';
        
        if (subject === 'movie') {
            for (let post of data[subject]) {
                console.log(post);

                HTMLContent += `
                    <article>
                        <h2>${post.Title}</h2>
                        <i>${post.Year}</i>
                        <p>${post.imdbID}</p>
                        <p class="left-indent">Tags: ${post.tags.join(', ')}</p>
                    </article>
                `
            }
        } else {
            HTMLContent = `
                <h1>${title}</h1>
                <p>${data[subject]}</p>
            `
        }
            
        content.innerHTML = HTMLContent;
    } catch(error) {
        console.log(error);
    }
}
   
 */




