import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../ui/card/Card";
import { Box, Typography } from "@mui/material";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const api_key = "45d1d56fc54beedb6c0207f9ac6cab7c";

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ru-RU&page=1`
    ).then(({ data }) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  return (
    <div>
      <Typography
        textAlign="center"
        variant="h3"
        color={"white"}
        fontWeight={"600"}
        margin={"20px 0"}
        className="popular-title"
      >
        Popular
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="20px">
        {movies.map((movie) => (
          <MovieCard
            image={movie?.poster_path}
            title={movie?.title}
            description={movie?.overview}
          />
        ))}
      </Box>
    </div>
  );
};

export default Popular;
