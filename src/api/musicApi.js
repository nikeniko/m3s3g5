const API_BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer";

export const fetchSongs = async (searchTerm) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search?q=${encodeURIComponent(searchTerm)}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};
