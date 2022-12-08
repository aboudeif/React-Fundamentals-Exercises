import React from "react";
import FavoriteMovie from "./FavoriteMovie";

const FavoriteMovieList = ({ profiles, users, movies }) => {
  return (
    <ul>
      {profiles.map((profile) => {
        const user = users[profile.userID].name;
        const movie = movies[profile.favoriteMovieID].name;
        return(<FavoriteMovie key={profile.id} user={user} movie={movie}/>);
})}
    </ul>
  );
};

export default FavoriteMovieList;
