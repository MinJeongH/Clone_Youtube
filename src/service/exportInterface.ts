import Youtube from "./youtube";



export interface IAppProps {
  youtube: Youtube;
}

export interface IVideoList {
  videos: IVideo[];
}

interface IThumbnail{
  url:string;
  width:Number;
  height:Number;
}

interface ISnippet{
  title: string;
  channelId: string; 
  thumbnails: { [thumnailSize: string]:IThumbnail}; 
  channelTitle: string;
  publishedAt : string;
}

interface IStatistics {
  viewCount : string;
}

export interface IVideo {
  id?: string,
  snippet: ISnippet;
  statistics: IStatistics;
}