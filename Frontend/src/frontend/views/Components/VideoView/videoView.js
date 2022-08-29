import React from "react";
import {CardContent, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import './videoView.css';
const VideoViewer = (props) =>{
  
  return (
    <Box sx={{justifyContent:'center', minWidth:'280px', maxWidth:'30%', padding:'0 1%', height:'fit-content'}}>

      {
        props.title == ""? 
        null: 
        <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
          {props.title}
        </Typography>
      }

      <iframe src={`//player.bilibili.com/player.html?aid=${props.info.aid}&bvid=${props.info.bvid}&cid=${props.info.cid}&page=1`} 
      scrolling="auto" border="0" frameBorder="no" framespacing="0" width='auto' height='auto' allowFullScreen={true}> </iframe>

      <CardContent sx={{padding:0}}>
        <Typography variant="body2" color="text.secondary"  textOverflow='ellipsis' >
          <Link target="_blank" href={`https://www.bilibili.com/video/${props.info.bvid}?share_source=copy_web`} underline='none' padding='0' textOverflow='ellipsis'>
            {props.info.description}
          </Link>
        </Typography>
      </CardContent>
    </Box>
  );
}

export default VideoViewer;