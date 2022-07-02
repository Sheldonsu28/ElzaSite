import React, { useEffect, useState, useRef } from "react";
import { Divider, Typography, Box, List, ListItem} from '@mui/material';
import VideoCard from "../VideoCard/videoCard";
import ContentContainer from "../ContentContainer";
import './videoContents.css'

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const AuthorView = (props)=>{
  const scrollRef = useHorizontalScroll();
  return (
    <Box sx={{ justifyContents:'center', minWidth: '100%', width:'100%', height: 'fit-content'}}>
      <Divider variant="middle">
        <Typography gutterBottom variant="h5" component="div" marginTop='0.2%'>
          {props.videos.author}
        </Typography>
      </Divider>
      <Box id='scroll' sx={{overflowX:'auto', width:'100%'}} ref={scrollRef}>
        <List sx={{maxHeight: 300, display:'flex'}}>
            {props.videos.videoInfos.map((video)=> {
              return (
                <ListItem sx={{width:'fit-content'}}>
                  <VideoCard key={video.aid} info={{aid: video.aid, 
                                    bvid: video.bvid, 
                                    title:video.title,
                                    pic:video.pic}}/>
                </ListItem>
              )
            })
            }

        </List>
      </Box>
    </Box>
  );
}

const VideoContentsView = (props)=>{
  const [authorInfo, setAuthorInfo] = useState([]);
  
  useEffect(()=>{
   
    props.fetchCallback().then(data=>{
      data.sort((a, b)=>b.videoInfos.length - a.videoInfos.length);
      setAuthorInfo(data);
    });
    
  }, [])
  return (
   
    <ContentContainer sectionTitle={props.sectionTitle}>
      <Box sx={{height: '100%', marginTop:'1%', width:'100%'}}>
        {authorInfo.map((vids)=>{
          return <AuthorView key={vids.author} videos={vids}/>
        })}
      </Box>
    </ContentContainer>
 
  );
}

export default VideoContentsView;