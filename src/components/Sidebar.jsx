import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
  selectSearchResults,
} from "../redux/slices/searchSlice";
import { fetchSongsAsync } from "../redux/slices/musicSlice";
import Spotify from "../assets/logo/logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const searchResults = useSelector(selectSearchResults);

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));

    if (term.trim() !== "") {
      dispatch(fetchSongsAsync(term));
    }
  };

  return (
    <aside className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-end-center">
          <a className="navbar-brand" href="index.html">
            <img src={Spotify} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
      <div>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <img src={result.album.cover_medium} alt="Album Cover" />
              <br />
              {result.title} - {result.artist.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
