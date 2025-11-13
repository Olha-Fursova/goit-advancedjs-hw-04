import axios from 'axios';

const apiKey = "53208176-1e9da6e5d5d5253b1447f8259";
const baseUrl = "https://pixabay.com/api/";

export async function fetchImages(query, page=1, per_page=15) {
  const params = {
    key: apiKey,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page,
  };

  try {
    const response = await axios.get(baseUrl, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
}