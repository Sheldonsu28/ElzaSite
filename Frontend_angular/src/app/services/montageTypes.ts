
export interface MontageInfo{
  channelId?:string;
  author?:string;
  videoInfos?:VideoInfo[];
}

interface VideoInfo{
  bvid:string;
  title:string;
  aid:string;
  pic:string;
}