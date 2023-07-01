import axios from 'axios';

const POCKETBASE_API_URL = 'https://api.pocketbase.io';

export const getPocketBaseData = async () => {
  try {
    const response = await axios.get(`${POCKETBASE_API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductData = async (productId: string) => {
  try {
    const response = await axios.get(`${POCKETBASE_API_URL}/data/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};