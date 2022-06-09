import React from 'react';
import Card from '@mui/material/Card';
import './aboutElza.css';
import {CardMedia, Divider, CardActionArea } from '@mui/material';
import Elza from '../../../../assets/elza_thumb.jpg'
import VideoViewer from '../VideoView/videoView';
import { Box } from '@mui/system';


const AboutElza = () => {
  const redirect = ()=>{
    window.open('https://space.bilibili.com/1521415')
  }
  return (
    <div className='sectionContainer'>
      <h1 className='sectionTitle'>关于艾尔莎本人</h1>
        <Card id='contentCard'>
          <CardActionArea onClick={redirect} sx={{width:'auto'}}>
            <CardMedia component="img" image={Elza} sx={{width:'auto', height:'100'}}/>
          </CardActionArea>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems:'center', margin:'auto'}}>
            <Box>
              <h1 className='elzaIntro'>全体目光向我看齐汪！</h1>
              <h3 className='elzaIntro'>我是redcircle所属的活泼后辈系冒险家</h3>
              <h2 className='elzaIntro'>艾尔莎•霍德芬拉克斯•约克</h2>
            </Box>
          </Box>
          <Divider sx={{width:'100%'}}/>
          
          <Box sx={{ display: 'flex', flexWrap:'wrap', justifyContent:'center', width:'100%', height: 'fit-content', marginTop:'3%'}}>

            <VideoViewer info={{aid: 847393362, 
                                bvid:"BV1yL4y1e7VJ", 
                                description:" 大家好！初次见面有些请求，那就是—— \n 看着我！陪着我！喜欢我！然后让我啃啃！\n 以上！这里是艾尔莎，以后要请多关照啦汪❤！"}}
                         title="自我介绍"/>

            <VideoViewer info={{aid: 974844293, 
                                bvid:"BV1s44y1y7tr", 
                                description:" L❤VING PUNCH\n 就由艾尔莎来给您爱感满溢的Loving Punch！"}}
                         title="出道曲"/>
            
          </Box>
        </Card>
    </div>
  );
}

export default AboutElza;