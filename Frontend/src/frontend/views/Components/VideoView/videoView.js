import React from "react";
import {CardContent, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import './videoView.css';
const VideoViewer = (props) =>{

  const iframeLink = `//player.bilibili.com/player.html?aid=${props.info.aid}&bvid=${props.info.bvid}&page=1`;
  const videoLink = `https://www.bilibili.com/video/${props.info.bvid}?share_source=copy_web`;

  let description = props.info.description;
  
  
  return (
    <Box sx={{justifyContent:'center', minWidth:'280px', maxWidth:'30%', padding:'0 1%', height:'fit-content'}}>

      {
        props.title == ""? 
        null: 
        <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
          {props.title}
        </Typography>
      }

      <iframe src={iframeLink} scrolling="auto" border="0" frameBorder="no" framespacing="0" width='100%' height='auto' allowFullScreen={true}> </iframe>

      <CardContent sx={{padding:0}}>
        <Typography variant="body2" color="text.secondary"  textOverflow='ellipsis' >
          <Link target="_blank" href={videoLink} underline='none' padding='0' textOverflow='ellipsis' sx ={{}}>
            {description}
          </Link>
        </Typography>
      </CardContent>
    </Box>
  );
}

export default VideoViewer;