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

let input = document.getElementById('input');
 let typeBtn = document.getElementById('typeBtn');

 input.addEventListener('click', function() {
    let url= ('https://www.omdbapi.com/?apikey=480593d7&s=marvel&type=movie' + input.value) 
   
    fetch (url)
    .then(response => response.text())      
    /* .then(data => {
       tableBody.innerHTML +=  `
         <tr>
				<td>${input.value}</td>
				<td>${data}</td>
		   </tr>
       `
       
      })  */
   
    .catch((error) => {console.log (error);})   
   
 })

 typeBtn.addEventListener('click', function() {
    let url= ('https://www.omdbapi.com/?apikey=480593d7&s=marvel&type=movie' + input.value) 
   
    fetch (url)
    .then(response => response.text())      
    /* .then(data => {
       tableBody.innerHTML +=  `
         <tr>
				<td>${input.value}</td>
				<td>${data}</td>
		   </tr>
       `
       
      })  */
   
    .catch((error) => {console.log (error);})   
   
 })
