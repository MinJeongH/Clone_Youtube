import axios, { Axios, AxiosInstance } from "axios";
import { IVideo } from "./export_Interface";

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
          regionCode: 'KR',
        },
      })

      if(response.data.items.length!==0){return response.data.items[0]}
      else{return undefined}
    } catch (e){
      if(axios.isAxiosError(e)){
        return undefined
      }
    }
  }

  async relatedVideo(id:string) { 
    const response = await this.youtube.get('search', {
      params: {
        type: 'video',
        part: 'snippet',
        relatedToVideoId: id,
        maxResults: 20,
        regionCode: 'KR',
      },
    })
    return response.data.items;
  }

  async search(query:string) {
    const response = await this.youtube.get('search', {
      params: {
        type: 'video',
        part: 'snippet',
        maxResults: 20,
        q: query,
        regionCode: 'KR',
      },
    })
    return response.data.items;
  }

  async channel(id:string) {
    try{const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id: id,
      }
    })
    if(response.data.items.length!==0){return response.data.items[0]}
    else{return undefined}}
    catch (e){
      if(axios.isAxiosError(e)){
        return undefined
      }
    }
  }
}

export default Youtube;