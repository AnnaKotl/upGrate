import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/events';

async function fetchMk() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { fetchMk };
