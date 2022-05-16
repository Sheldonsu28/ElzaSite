import React from 'react';
import Card from '@mui/material/Card';
import './aboutElza.css';
import {CardContent, CardMedia, Divider, Typography, Link } from '@mui/material';
import Elza from '../../../../assets/ELZA.jpg'
import { Box } from '@mui/system';


const AboutElza = () => {
  return (
    <div id="introSection">
      <h1 id="introTitle" style={{color:'white'}}>关于艾尔莎本人：</h1>
        <Card id='introCard' sx={{ borderRadius:'20px'}}>
          
          <CardMedia component="img" image={Elza} sx={{width:'auto', height:'100'}}/>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems:'center', margin:'auto'}}>
            <Box>
              <h1>全体目光向我看齐汪！</h1>
              <h3>我是redcircle所属的活泼后辈系冒险家</h3>
              <h2>艾尔莎•霍德芬拉克斯•约克</h2>
            </Box>
          </Box>
          <Divider sx={{width:'100%'}}/>
          
          <Box sx={{ display: 'flex', flexWrap:'wrap', justifyContent:'center', width:'100%', height: 'fit-content', marginTop:'1%'}}>

            <Box sx={{justifyItems:'center', minWidth: 'fit-content', width:'50%', height: 'fit-content'}}>

              <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
                自我介绍
              </Typography>

              <CardMedia component='iframe'
              image="//player.bilibili.com/player.html?aid=847393362&bvid=BV1yL4y1e7VJ&cid=391069974&page=1"
              sx={{width:'50%', margin:'auto'}}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                <Link href='https://www.bilibili.com/video/BV1yL4y1e7VJ?share_source=copy_web' underline='none'>
                  大家好！初次见面有些请求，那就是—— <br/>
                  看着我！陪着我！喜欢我！然后让我啃啃！<br/>
                  以上！这里是艾尔莎，以后要请多关照啦汪❤！
                </Link>
                </Typography>
              </CardContent>
            </Box>

            <Box sx={{justifyItems:'center', minWidth: 'fit-content', width:'50%', height: 'fit-content'}}>

              <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
                出道曲
              </Typography>

              <CardMedia component='iframe'
              image="//player.bilibili.com/player.html?aid=974844293&bvid=BV1s44y1y7tr&cid=387911876&page=1"
              sx={{width:'50%', margin:'auto'}}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                <Link href='https://www.bilibili.com/video/BV1s44y1y7tr?share_source=copy_web' underline='none'>
                  L❤VING PUNCH<br/>
                  就由艾尔莎来给您爱感满溢的Loving Punch！
                </Link>
                </Typography>
              </CardContent>
            </Box>
            
          </Box>
        </Card>
    </div>
  );
}

export default AboutElza;