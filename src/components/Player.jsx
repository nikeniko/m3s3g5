import React from "react";
import { useSelector, useDispatch } from "react-redux";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";
import { selectCurrentSong } from "../redux/slices/playerSlice";
import { selectLikedSongs, toggleLike } from "../redux/slices/likedSongsSlice";

const Player = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector(selectCurrentSong);
  const likedSongs = useSelector(selectLikedSongs);
  const isLiked = currentSong && likedSongs.includes(currentSong.id);

  const handleLikeClick = () => {
    if (currentSong) {
      dispatch(toggleLike(currentSong.id));
    }
  };
  if (!currentSong) {
    return (
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-4 text-center text-white">
            No song is currently playing.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1 ps-7">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={currentSong.album.cover_medium || ""}
            alt="Current Track"
            className="img-fluid player-image"
            style={{ maxHeight: "80px" }}
          />
          <div className="ml-2">
            <p className="text-white mb-1" style={{ fontSize: "0.7rem" }}>
              Now Playing: "{currentSong.title}"
            </p>
            <p className="text-white mb-0" style={{ fontSize: "0.7rem" }}>
              Artist: {currentSong.artist ? currentSong.artist.name : ""}
            </p>
            <button
              className="btn fs-5 text-secondary p-0"
              onClick={handleLikeClick}
            >
              {isLiked ? "❤️" : "♡"}
            </button>
          </div>
        </div>
        <div className="col-12 col-md-8 d-flex align-items-center justify-content-center flex-column">
          <div className="d-flex justify-content-around w-100 mb-2">
            <a href="#" className="text-center">
              <img
                src={shuffleIcon}
                alt="Shuffle"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <img
                src={prevIcon}
                alt="Previous"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <img
                src={playIcon}
                alt="Play"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <img
                src={nextIcon}
                alt="Next"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <img
                src={repeatIcon}
                alt="Repeat"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
          </div>
          <div className="progress w-100" style={{ height: "3px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
