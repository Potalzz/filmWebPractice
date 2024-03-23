import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movie.genres);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.background_image_original} />
          <h2>{movie.title_long}</h2>
          <h3>Rating: {movie.rating}</h3>
          <p>{movie.summary}</p>
          <p>[ {movie.genres && movie.genres.join(", ")} ]</p>
        </div>
      )}
    </div>
  );
}
