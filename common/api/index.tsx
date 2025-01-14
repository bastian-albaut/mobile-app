export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const baseUrl = 'http://bivouapp-api-gateway.cluster-ig5.igpolytech.fr:8081/api';
  const response = await fetch(`${baseUrl}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.body}`);
  }

  // If no content, return empty object
  if (response.status === 204) {
    return {};
  }

  return await response.json();
};
