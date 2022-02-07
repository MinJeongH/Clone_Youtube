export interface IVideoList{
  videos: IVideo[];
}

export interface IRelatedVideoList{
  relatedvideos: IRelatedVideo[];
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

interface ISnippet{
  title: string;
  channelId: string; 
  thumbnails: { [thumnailSize: string]:IThumbnail}; 
  channelTitle: string;
  publishedAt : string;
  type: string;
  description: string;
}

interface IStatistics {
  viewCount : string;
  likeCount : string;
  dislikeCount : string;
}

interface IVideoId{
  videoId : string;
}

interface IThumbnail{
  url:string;
  width:Number;
  height:Number;
}