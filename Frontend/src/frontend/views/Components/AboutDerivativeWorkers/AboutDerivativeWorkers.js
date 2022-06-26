import React, { useEffect, useState } from "react";
import { Divider, Typography, Card, Box, Tabs} from '@mui/material';
import MontageController from "../../../controllers/Montages";
import VideoViewer from "../VideoView/videoView";

const AuthorView = (props)=>{

  return (
    <Box sx={{ justifyContents:'center', minWidth: '100%', width:'100%', height: 'fit-content'}}>
      <Divider variant="middle">
        <Typography gutterBottom variant="h5" component="div" marginTop='0.2%'>
          {props.videos.author}
        </Typography>
      </Divider>
      <Box sx={{overflowX:'auto', width:'100%'}}>
        <Tabs variant="scrollable" scrollButtons="auto">
            {props.videos.videoInfos.map((video)=> {
              return (
                <VideoViewer key={video.aid} info={{aid: video.aid, 
                                    bvid: video.bvid, 
                                    description:video.description}}
                                    title="" intab={true}/>
              )
            })
            }

        </Tabs>
      </Box>
    </Box>
  );
}

const DerivativeWorkerView = (props)=>{
  const [slicerInfo, setSlicerInfo] = useState([]);
  
  useEffect(()=>{
   
    MontageController.fetchAllDerivativeWork().then(data=>{setSlicerInfo(data)});
    
  }, [])
  return (
   <div className='sectionContainer'>
      <h1 className='sectionTitle'>艾尔莎的二创man们</h1>
      <Card id='contentCard'>
        <Box sx={{height: '100%', marginTop:'1%', width:'100%'}}>
          {slicerInfo.map((vids)=>{
            return <AuthorView key={vids.author} videos={vids}/>
          })}
        </Box>
      </Card>
    </div>
  );
}

export default DerivativeWorkerView;