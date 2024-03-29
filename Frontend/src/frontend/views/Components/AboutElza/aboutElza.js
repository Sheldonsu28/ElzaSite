import React, { useState, useEffect } from 'react';
import './aboutElza.css';
import {CardMedia, Divider, CardActionArea } from '@mui/material';
import Elza from '../../../../assets/elza_thumb.jpg'
import VideoViewer from '../VideoView/videoView';
import ContentContainer from '../ContentContainer';
import { AuthorView } from '../VideoContentsView/videoContents';
import { Box } from '@mui/system';


const AboutElza = (props) => {
  const redirect = ()=>{
    window.open('https://space.bilibili.com/1521415')
  }
  const [recordings, setRecordings] = useState({author:'艾尔莎快餐店', videoInfos:[]});

  useEffect(()=>{
    props.fetchCallback().then(data=>{
      data[0].author = '录播'
      setRecordings(data[0]);
    });
  }, [])
  return (
    
    <ContentContainer sectionTitle={'关于艾尔莎本人'}>
      <CardActionArea onClick={redirect} sx={{width:'auto'}}>
        <CardMedia component="img" image={Elza} sx={{width:'auto', height:'100'}}/>
      </CardActionArea>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems:'center', margin:'auto'}}>
        <Box>
          <h1 className='elzaIntro'>全体目光向我看齐汪！</h1>
          <h3 className='elzaIntro'>我是RedCircle和虚研社所属的活泼后辈系冒险家</h3>
          <h2 className='elzaIntro'>艾尔莎•霍德芬拉克斯•约克</h2>
        </Box>
      </Box>
      <Divider sx={{width:'100%'}}/>
      
      <Box sx={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly', width:'100%', height: 'fit-content', marginTop:'3%'}}>

        <VideoViewer info={{aid: 847393362, 
                            bvid:"BV1yL4y1e7VJ", 
                            description:" 大家好！初次见面有些请求，那就是—— \n 看着我！陪着我！喜欢我！然后让我啃啃！\n 以上！这里是艾尔莎，以后要请多关照啦汪❤！",
                            cid: 391069974}}
                      title="自我介绍"/>

        <VideoViewer info={{aid: 974844293, 
                            bvid:"BV1s44y1y7tr", 
                            description:" L❤VING PUNCH\n 就由艾尔莎来给您爱感满溢的Loving Punch！",
                            cid: 387911876}}
                      title="出道曲"/>

      </Box>
      <AuthorView key={'艾尔莎快餐店'} videos={recordings}/>

    </ContentContainer>
      
  );
}

export default AboutElza;