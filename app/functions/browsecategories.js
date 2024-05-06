import axios from "axios";
import qs from "qs";

export default async function browsecategories() {
    const data = {
      grant_type: 'client_credentials',
      client_id: '23d53b3a68cc4d728be235dd99f30334',
      client_secret: '75f89851a1684d06acf8200e62458121'
    };
  
    try {
      // Request to get the access token
      const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
  
      const accessToken = tokenResponse.data.access_token;
  
      // Use the access token to make another request to Spotify API
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };
  
      const categoryResponse = await axios.get('https://api.spotify.com/v1/browse/categories', config);

      return categoryResponse.data
  
    } catch (error) {
      console.error('Error:', error);
    }
  }