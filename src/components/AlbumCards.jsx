import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../redux/actions";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleSongClick = () => {
    dispatch(setCurrentSong(song));
  };

  return (
    <div
      className="col text-center"
      onClick={handleSongClick}
      style={{ cursor: "pointer" }}
    >
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
