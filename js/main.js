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


const data = async() => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=480593d7&type=movie&s=marvel`);
    const movieData = await response.json();
    console.log(movieData);
    movieOutput(movieData)
    
} 


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

document.getElementById("type").addEventListener(`click`, function(e){

    data();
    e.target.remove();
}) 


