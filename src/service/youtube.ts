import { AxiosInstance } from "axios";

class Youtube {
  youtube: AxiosInstance;
  constructor(httpClient:AxiosInstance) {
    this.youtube = httpClient;
  }
  
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet,statistics',
        chart : 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}

export default Youtube;