import React, { useEffect, useState } from "react";
import { Divider, Typography, Card, Box,} from '@mui/material';
import MontageController from "../../../controllers/Montages";
import VideoViewer from "../VideoView/videoView";

const AuthorView = (props)=>{
  return (
    <Box sx={{ justifyContents:'center', minWidth: 'fit-content', maxWidth:'100%', height: 'fit-content'}}>
      <Divider variant="middle" sx={{width:'100%'}}>
        <Typography gutterBottom variant="h5" component="div" marginTop='0.2%'>
          {props.videos.author}
        </Typography>
      </Divider>
      <Box sx={{ display: 'flex', flexWrap:'wrap', justifyContent:'center', width:'100%', height: 'fit-content', marginTop:'3%'}}>
        {props.videos.videoInfos.map(video=> {
          return (
            <VideoViewer info={{aid: video.aid, 
                                bvid: video.bvid, 
                                description:video.description}}
                                title=""/>
          )
        })
        }
      </Box>
    </Box>
  );
}

const SlicerView = (props)=>{
  const [slicerInfo, setSlicerInfo] = useState([]);
  
  useEffect(()=>{
   
    MontageController.fetchAll().then(data=>{setSlicerInfo(data)})
    
  }, [])
  return (
   <div className='sectionContainer'>
      <h1 className='sectionTitle'>艾尔莎的切片man们</h1>
        <Card id='contentCard'>
          <Box sx={{height: 'fit-content', marginTop:'1%'}}>
            {slicerInfo.map(vids=>{
              return <AuthorView videos={vids}/>
            })}
          </Box>
        </Card>
    </div>
  );
}

export default SlicerView;