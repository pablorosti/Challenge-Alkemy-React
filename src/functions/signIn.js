import axios from "axios";

export const signIn = async (credentials) => {
  try {
    const url = `http://challenge-react.alkemy.org/`;
    const result = await axios.post(url, credentials);
    const data = await result.data;
    return data;
  } catch (error) {
    return false;
  }
};
