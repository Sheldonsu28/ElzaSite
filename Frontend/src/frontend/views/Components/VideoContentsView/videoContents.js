import React, { useEffect, useState, useRef } from "react";
import { Divider, Typography, Box, List, ListItem} from '@mui/material';
import VideoCard from "../VideoCard/videoCard";
import ContentContainer from "../ContentContainer";
import './videoContents.css'


const AuthorView = (props)=>{
  const scrollRef = useRef();

  useEffect(()=>{
    let el = scrollRef.current;
    if (el){
      const x_scroll = (e)=>{
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({left: e.deltaY + el.scrollLeft});
      }
      el.addEventListener('wheel', x_scroll);
      return ()=>el.removeEventListener("wheel", x_scroll);
    }
  }, []);

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
                <ListItem key={video.aid} sx={{width:'fit-content'}}>
                  <VideoCard info={{aid: video.aid, 
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

const withContentsView = (Component)=> (props) =>{
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
          return <Component key={vids.channelId} videos={vids}/>
        })}
      </Box>
    </ContentContainer>
 
  );
}

export {AuthorView};
export default withContentsView(AuthorView);