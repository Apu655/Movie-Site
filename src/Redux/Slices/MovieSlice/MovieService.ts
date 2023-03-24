import axios from "axios";

const API_KEY = '8b6df62253b4f02d186eaf35b0f43ea2'

const API_URL_GET = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const getMovie = async () => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
  const response = await axios.get(API_URL_GET);
  console.log("Result from redux",response.data.results)
  return response.data.results;
};
const getMovieBySearch = async (query:string) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    console.log("Data from redux search:",response.data)

    return response.data.results;
  };

const movieService = {
  getMovie,
  getMovieBySearch,
};

export default movieService;
