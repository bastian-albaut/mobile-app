import { apiClient } from '../index';
import { mockBivouacs } from './MockData';
// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api';

export const getBivouacs = async () => {
  // try {
  //   const response = await apiClient('bivouacs', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   return response;
  // } catch (error) {
  //   console.error('Error creating bivouac:', error);
  //   throw error;
  // }
  return mockBivouacs;
};

export const getBivouacById = async (id: number) => {
  // try {
  //   const response = await apiClient(`bivouacs/${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   return response;
  // } catch (error) {
  //   console.error('Error creating bivouac:', error);
  //   throw error;
  // }
  return mockBivouacs;
};

export const createAddress = async (addressData: any) => {
  try {
    const response = await apiClient('addresses', {
      method: 'POST',
      body: JSON.stringify(addressData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating bivouac:', error);
    throw error;
  }
};

export const createBivouac = async (bivouacData: any) => {
  try {
    const response = await apiClient('bivouacs', {
      method: 'POST',
      body: JSON.stringify(bivouacData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating bivouac:', error);
    throw error;
  }
};

// export const getBivouacsTest = async () => {
//   const response = await axios.get(`${API_URL}/bivouacs`);
//   return response.data;
// };

// export const getUserBivouacsTest = async () => {
//   const response = await axios.get(`${API_URL}/user/bivouacs`);
//   return response.data;
// };

// export const getBivouacByIdTest = async (id: number) => {
//   const response = await axios.get(`${API_URL}/bivouacs/${id}`);
//   return response.data;
// };

// export const createBivouacTest = async (bivouac: any) => {
//   const response = await axios.post(`${API_URL}/bivouacs`, bivouac);
//   return response.data;
// };