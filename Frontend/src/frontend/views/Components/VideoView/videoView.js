import React, { useEffect, useState, Fragment } from "react";
import {CardContent, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import './videoView.css';
const VideoViewer = (props) =>{

  const [iframeLink, setIframeLink] = useState('');
  const [videoLink, setVideoLink] = useState('');

  useEffect(()=>{
    setIframeLink(`//player.bilibili.com/player.html?aid=${props.info.aid}&bvid=${props.info.bvid}&page=1`);
    setVideoLink(`https://www.bilibili.com/video/${props.info.bvid}?share_source=copy_web`);
  }, [])


  return (
    <Box sx={{justifyItems:'center', minWidth: 'fit-content', width:'20%', margin:'0 auto 0', height: 'fit-content'}}>

      <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
        {props.title}
      </Typography>

      <iframe src={iframeLink} scrolling="auto" border="0" frameBorder="no" framespacing="0" width='auto' height='auto' allowFullScreen={true}> </iframe>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <Link className="display-linebreak" href={videoLink} underline='none'>
          {props.info.description}
        </Link>
        </Typography>
      </CardContent>
    </Box>
  );
}

export default VideoViewer;