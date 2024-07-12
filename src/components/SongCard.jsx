import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../redux/slices/playerSlice";
import { toggleLike } from "../redux/slices/likedSongsSlice";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs.likedSongs);
  const isLiked = likedSongs.includes(song.id);

  const handleSongClick = () => {
    dispatch(setCurrentSong(song));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(song.id));
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
      <button className="btn fs-5 text-secondary p-0" onClick={handleLikeClick}>
        {isLiked ? "❤️" : "♡"}
      </button>
    </div>
  );
};

export default SongCard;
