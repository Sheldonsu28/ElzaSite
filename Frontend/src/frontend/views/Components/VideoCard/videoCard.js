import React from 'react';
import { CardActionArea , Card, CardContent, CardMedia, Typography} from '@mui/material';

const VideoCard = (props) =>{
  return (
    <Card sx={{ width:'170px', height:'170px', backgroundColor:"#e8ccd7d9"}} component="div">
      <CardActionArea sx={{height:'100%'}} onClick={()=>{window.open(`https://www.bilibili.com/video/${props.info.bvid}`, "_blank")}}>
        <CardMedia
          component="img"
          loading="lazy"
          image={`data:image/webp;base64,${props.info.pic}`}
        />
        <CardContent sx={{ paddingTop:'0px', paddingBottom:'auto', paddingLeft:'0px', paddingRight:'0px', textAlign:'start'}}>
          <Typography gutterBottom variant="body2" color="text" sx={{textOverflow:'ellipsis'}}>
            {props.info.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}

export default VideoCard;