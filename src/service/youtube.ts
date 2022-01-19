import axios, { Axios, AxiosInstance } from "axios";
import { IVideo } from "./exportInterface";

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
        regionCode: 'KR',
      },
    });
    return response.data.items;
  }

  async viewVideo(id:string):Promise<IVideo | undefined> {
    try{
      const response = await this.youtube.get('videos', {
        params: {
          part: 'snippet,statistics',
          id: id,
          regionCdoe: 'KR',
        },
      })

      if(response.data.items.length!==0){return response.data.items[0]}
      else{return undefined}
    } catch (e){
      if(axios.isAxiosError(e)){
        console.log(e.code)
        return undefined
      }
    }
  }
}

export default Youtube;