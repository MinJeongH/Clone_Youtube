export interface ISearch{
  snippet : ISnippet;
  q : string;
  id : IVideoId;
}

export interface IVideo {
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface IRelatedVideo{
  id: IVideoId;
  snippet: ISnippet|undefined;
}

export interface IChannels {
  id: string;
  snippet: ISnippet;
}

export interface ISnippet{
  title: string;
  channelId: string; 
  thumbnails: { [thumnailSize: string]:IThumbnail}; 
  channelTitle: string;
  publishedAt : string;
  type: string;
  description: string;
}

export interface IStatistics {
  viewCount : string;
  likeCount : string;
  dislikeCount : string;
}

export interface IVideoId{
  videoId : string;
}

interface IThumbnail{
  url:string;
  width:Number;
  height:Number;
}