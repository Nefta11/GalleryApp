import axios from "axios";

export const fetchImages = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/images");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
