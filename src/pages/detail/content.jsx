import millify from "millify";
import List from "./list";

const Content = ({ movie }) => {
  return (
    <div className="my-10 grid md:grid-cols-2 gap-5 md:gap-10">
      <div>
        <List title="Categories" arr={movie.genres} />
        <List title="Languages" arr={movie.spoken_languages} />
        <List title="Productions" arr={movie.production_companies} />
        <List title="Countries" arr={movie.production_countries} />
      </div>

      <div className="flex flex-col gap-5">
        <p>{movie.overview}</p>

        <p>
          <span>Budget: </span>
          <span className="text-green-500 font-semibold">
            {movie.budget === 0 ? "Unknown" : "$" + millify(movie.budget)}
          </span>
        </p>

        <p>
          <span>Revenue: </span>
          <span className="text-green-500 font-semibold">
            {movie.revenue === 0 ? "Unknown" : "$" + millify(movie.revenue)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Content;