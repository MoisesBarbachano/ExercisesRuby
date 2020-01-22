const blockDisplay = 'block';
const noneDisplay = 'none';
const inputMovieName = document.getElementsByClassName('js-name-searched')[0]
const movieTable = document.getElementsByClassName('js-information-movie')[0];
const messageNotFound = document.getElementsByClassName('js-movie-not-founded')[0];
const movieTableName = document.getElementsByClassName('js-movie-name')[0];
const movieTableYear = document.getElementsByClassName('js-movie-year')[0];
const movieTableActors = document.getElementsByClassName('js-movie-actors')[0];

const setDataTable = (data) => {
  movieTableName.innerHTML = data.Title;
  movieTableYear.innerHTML = data.Year;
  movieTableActors.innerHTML = data.Actors;
  movieTable.style.display = blockDisplay;
}

const getInfoMovie = (url) => {
  axios.get(url)
    .then(function (response) {
      if(response.data.Error){ return messageNotFound.style.display = blockDisplay;};
      if (response.status == 200) {
        setDataTable(response.data);
      }
    })
    .catch(function (error) {
      console.log(`Error: $(error)`);
    });
}

const searchMovie = () => {
  const blankSpace = '';
  const queryURL = "http://www.omdbapi.com/?t=" + inputMovieName.value + "&y=&plot=short&apikey=40e9cece";
  
  movieTable.style.display = noneDisplay;
  messageNotFound.style.display = noneDisplay;
  getInfoMovie(queryURL);
  inputMovieName.value = blankSpace;
}