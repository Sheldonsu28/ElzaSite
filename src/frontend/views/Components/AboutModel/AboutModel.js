import React from 'react';
import Card from '@mui/material/Card';
import './AboutModel.css';
import Modeler from './Dokex-尚尚.png';
import design from './design.jpg';
import design_bili from './画画的DanGo.gif'
import { CardMedia, Divider, Typography, Button, Avatar, CardHeader } from '@mui/material';
import { Box } from '@mui/system';

const AboutModel = () => {
  return (
    <div id="AboutModel">
      <h1 id="title" style={{color:'white'}}>关于艾尔莎的皮：</h1>
        <Card id='modelCard' sx={{ borderRadius:'20px'}}>

          <CardMedia component="img" image={design} sx={{maxHeight:'fir-content'}}/>
          
          <Divider sx={{width:'100%'}}/>
          
          <Box sx={{height: 'fit-content', marginTop:'1%'}}>
            <Box sx={{ justifyContents:'center', minWidth: 'fit-content', width:'100%', height: 'fit-content'}}>

              <Divider variant="middle">
                <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
                  绘制
                </Typography>
              </Divider>
              <Box sx={{display: 'flex', flexWrap:'wrap', flexDirection:'row', width:"100%", justifyContent:'center'}}>

                <Button disableRipple='True' disableFocusRipple='True' href='https://weibo.com/soramiao'>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="傲娇团子DanGo"
                        src="https://tvax2.sinaimg.cn/crop.81.106.924.924.180/80eff6e0ly8gno8go036oj20u016f7a9.jpg?KID=imgbed,tva&Expires=1651743586&ssig=szS0SgJsB%2B"
                        sx={{ width: 56, height: 56 }}
                      />
                    }
                    title='微博@傲娇团子DanGo'
                  />
                </Button>

                <Button disableRipple='True' disableFocusRipple='True' href='https://space.bilibili.com/1437180'>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="画画的DanGo"
                        src={design_bili}
                        sx={{ width: 56, height: 56 }}
                      />
                    }
                    title='B站@画画的DanGo'
                  />
                </Button>
              </Box>
              <h5 className='text'>
                从她B站上传的原生动态头像和她仅仅7位的uid可以看出，这个妈咪，绝对不简单！
              </h5>
            </Box>


            <Box sx={{ justifyContents:'center', minWidth: 'fit-content', width:'100%', height: 'fit-content'}}>

              <Divider variant="middle">
                <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
                  模型
                </Typography>
              </Divider>
              <Box sx={{display: 'flex', flexWrap:'wrap', flexDirection:'row', width:"100%", justifyContent:'center'}}>

                <Button disableRipple='True' disableFocusRipple='True' href='https://space.bilibili.com/10857187'>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="Dokex-尚尚"
                        src={Modeler}
                        sx={{ width: 56, height: 56 }}
                      />
                    }
                    title='B站@Dokex-尚尚'
                  />
                </Button>
              </Box>
            </Box>

            
            <Box sx={{ justifyContents:'center', minWidth: 'fit-content', width:'100%', height: 'fit-content'}}>
              <Divider variant="middle">
                <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
                  演示
                </Typography>
              </Divider>
              <iframe src="//player.bilibili.com/player.html?aid=419986250&bvid=BV1S3411q7mH&cid=391888610&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
              <h5 className='text'>
                谁能想到这个皮现在这么屑了呢...
              </h5>
            </Box>
          
          </Box>

        </Card>
    </div>
  )
}

export default AboutModel